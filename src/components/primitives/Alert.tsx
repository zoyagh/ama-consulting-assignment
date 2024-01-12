import clsx from 'clsx';
import {Icon, Row, Stack} from '@/components/primitives';

import {mdiCheckCircle, mdiAlert} from '@mdi/js';

type AlertVariant = 'success' | 'error';

interface AlertProps extends React.PropsWithChildren {
  className?: string;
  variant?: AlertVariant;
  title?: string;
  text?: string;
}

export const Alert: React.FC<AlertProps> = ({children, className, variant = 'error', title, text}) => {
  return (
    <div
      className={clsx(
        className,
        'rounded-lg p-4',
        variant === 'error' ? 'border-error text-error' : 'border-green text-primary'
      )}
    >
      <Row align="center" justify="between">
        <Row align="start" nowrap className="gap-x-4">
          <Icon
            name={variant === 'error' ? mdiAlert : mdiCheckCircle}
            color={variant === 'error' ? 'error' : 'green'}
          />
          <Stack spacing="xs">
            {title && <div className="text-lg font-semibold leading-5">{title}</div>}

            {text && <div>{text}</div>}
          </Stack>
        </Row>
      </Row>

      {children}
    </div>
  );
};
