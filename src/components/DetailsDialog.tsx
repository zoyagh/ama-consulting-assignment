import type {FC} from 'react';

import {Dialog, Stack} from '@/components/primitives';
import DataTable from './DataTable';

export interface FailedRecord {
  reference: number;
  description: string;
  reasons?: string[];
}

export interface Columns {
  Header: string;
  accessor: keyof FailedRecord;
}

interface AssignDialogProps {
  open: boolean;
  onClose: () => void;
  failedRecords: FailedRecord[];
}

const DetailsDialog: FC<AssignDialogProps> = ({open, onClose, failedRecords}) => {
  const columnsData: Columns[] = [
    {Header: 'Reference', accessor: 'reference'},
    {Header: 'Description', accessor: 'description'},
    {Header: 'Reasons', accessor: 'reasons'},
  ];

  return (
    <Dialog open={open} onClose={onClose}>
      <Stack className="m-10 h-auto w-[800px]" spacing="3xl">
        <Stack>
          <h3 className="text-secondary text-2xl font-bold font-roobert text-center">Failed Records</h3>
          <div className="text-secondary text-center ">More information about the cause of each failed record!</div>
        </Stack>
        <DataTable columns={columnsData} data={failedRecords} className=" font-roobert" />
      </Stack>
    </Dialog>
  );
};
export default DetailsDialog;
