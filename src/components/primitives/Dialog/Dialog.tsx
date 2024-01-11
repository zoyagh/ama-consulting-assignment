import clsx from 'clsx';
import {Fade} from '@/components/primitives';
import {RemoveScroll} from 'react-remove-scroll';
import Portal from '@/components/primitives/Dialog/components/Portal';
import Backdrop from '@/components/primitives/Dialog/components/Backdrop';

interface DialogProps extends React.PropsWithChildren {
  className?: string;
  open: boolean;
  onClose?: () => void;
}

export const Dialog: React.FC<DialogProps> = ({
  children,
  className,
  open,
  onClose,
}) => {
  return (
    <Portal>
      <Backdrop open={open} onClick={onClose} />
      <RemoveScroll enabled={open}>
        <Fade in={open} >
          {open && (
            <div
              className={clsx(
                className,
                'fixed top-1/2 left-1/2 z-40 -translate-x-1/2 -translate-y-1/2',
                'bg-white flex flex-col overflow-hidden shadow-[0_0_10px_#00000029]',
                'rounded-lg',
              )}
            >
              {children}
            </div>
          )}
        </Fade>
      </RemoveScroll>
    </Portal>
  );
};
