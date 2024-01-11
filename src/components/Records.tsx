import React, {useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import {Alert, Button, Row} from './primitives';
import clsx from 'clsx';
import api from '@/api';
import img from '@/../public/uploadImg.png';
import {Stack} from './primitives/Stack';
import DetailsDialog from './DetailsDialog';
import Image from 'next/image';
import img2 from '@/../public/uploadFile.png';
import img3 from '@/../public/validate.png';
import img4 from '@/../public/file.jpg';
import { Constants } from '@/consts/contants';

const UploadComponent: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);
  const [failedRecords, setFailedRecords] = useState<any>([]);
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const onDrop = (acceptedFiles: File[]) => {
    showError && setShowError(false);
    showSuccess && setShowSuccess(false);
    error && setError('');

    const file = acceptedFiles[0];

    const acceptedFileTypes = ['text/xml', 'text/csv'];

    if (!acceptedFileTypes.includes(file.type)) {
      setError('Invalid file type');
      return;
    }

    const fileSizeInMb = file.size / Constants.FILE_SIZE_IN_MB
    const sizeLimitInMb = Constants.SIZE_LIMIT_IN_MB;

    if (fileSizeInMb > sizeLimitInMb) {
      setError('File size exceeds the limit');
      return;
    }

    setFile(file);
  };

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});

  const uploadFile = async () => {
    if (!file) {
      setError('No file selected for upload');
      return;
    } else {
      error && setError('');
    }

    showError && setShowError(false);
    showSuccess && setShowSuccess(false);

    try {

      const formData = new FormData();
      formData.append('file', file);

      const uploadResponse = await api.post('/records/file', formData);
      if (uploadResponse?.data?.length) {
        setFailedRecords(uploadResponse.data);
        setShowError(true);
      } else setShowSuccess(true);
    } catch (error) {
      setError('Error during uploading file');
      console.log('Error during uploading file: ', error);
    } finally {
      setFile(null);
    }
  };

  useEffect(() => {
    if (isDragActive) {
      error && setError('');
      showError && setShowError(false);
      showSuccess && setShowSuccess(false);
    }
  }, [isDragActive, showError, showSuccess, error]);

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  return (
    <>
      <Stack className="m-10 h-auto flex items-center" spacing="2xl">
        <Stack className="shadow-[0_0_55px_#DBDBDB] w-[900px] h-[600px] mx-10 my-10">
          <div className="mx-auto w-[700px]">
            <Image
              src={img2}
              alt="upload img"
              width="414"
              height="200"
              className={clsx('w-[414px] mx-auto -mb-[20px] duration-300', file ? ' ' : 'mt-[70px]')}
            />
            <div
              {...getRootProps()}
              className={clsx(
                'border-2 border-dashed shadow-[0_0_25px_#d9dadb80] rounded-2xl px-6 text-center transition-all ease-in-out duration-300',
                isDragActive ? 'border-blue-500' : 'border-gray border-opacity-60',
                'h-60',
                'w-full flex items-center flex-col cursor-pointer'
              )}
            >
              <input {...getInputProps()} />
              <Image src={img} alt="upload img" width="196" height="200" className={isDragActive ? 'mt-6' : '-mt-6'} />
              {!isDragActive && (
                <div className="duration-300">
                  <p className=" text-[27px] font-semibold -mt-9  opacity-70">Drag & Drop</p>
                  <p className=" text-[16px] font-semibold mt-[3px] opacity-50">Your file here Or Browse to upload</p>
                  <p className=" text-[13px] font-bold mt-[3px] opacity-80" style={{color: '#4883E7'}}>
                    Only CSV and XML with max size of 15 MB.
                  </p>
                </div>
              )}
            </div>

            {file && (
              <div
                className={clsx(
                  'flex flex-col items-center justify-center mt-4 pt-4 transition-all duration-500 transform scale-100 opacity-100 origin-center'
                )}
              >
                <div title={file.name}>
                  <Image
                    src={img4}
                    alt="file"
                    width="90"
                    height="90"
                    className={clsx(
                      'transform transition-all duration-300',
                      isDragActive ? 'scale-90' : 'scale-100',
                      'w-[90px] h-[90px] rounded-xl shadow-[0_0_55px_#DBDBDB] transform transition-all duration-300 scale-100 opacity-100'
                    )}
                  />
                  <p className="max-w-[80px] text-[14px]  mx-auto justify-center font-semibold opacity-50  truncate ">
                    {file.name}
                  </p>
                </div>
              </div>
            )}

            {showSuccess && (
              <Alert
                variant="success"
                title="Success"
                text="Your file successfuly validated!"
                className="mt-5 w-[344px]"
              />
            )}
            {showError && (
              <Row className="w-full items-center justify-between">
                <Alert title="Something whent wrong" text="Failed to validate the file!" className="mt-5 w-[344px]" />
                <Button color="error" className="text-white hover:opacity-70 " onClick={() => setDialogOpen(true)}>
                  Details
                </Button>
              </Row>
            )}
            {error  && !showError && <Alert title="Error" text={error} className="mt-5 w-[344px]" />}
          </div>
        </Stack>
        <div className="relative w-[100%] flex justify-center">
          <Image
            src={img3}
            alt="validate file"
            width="414"
            height="200"
            className={clsx(
              'absolute bottom-[19px]  duration-300 ',
              !file ? 'cursor-default' : 'cursor-pointer hover:w-[420px] '
            )}
            onClick={uploadFile}
          />
        </div>
      </Stack>
      <DetailsDialog open={dialogOpen} onClose={handleDialogClose} failedRecords={failedRecords} />
    </>
  );
};

export default UploadComponent;
