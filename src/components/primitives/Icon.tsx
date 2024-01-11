import type {FC, MouseEventHandler} from 'react';

import clsx from 'clsx';

interface IconProps {
  className?: string;
  name: string;
  color?: string;
  size?: string | number;
  small?: boolean;
  large?: boolean;
  onClick?: MouseEventHandler<HTMLSpanElement>;
}

export const Icon: FC<IconProps> = ({className, name, color = 'gray', size, small, large, onClick}) => {
  return (
    <span
      aria-hidden="true"
      className={clsx(
        className,
        !(small || large) && 'text-2xl',
        small && 'text-base w-4 h-4',
        large && 'text-[2rem] w-8 h-8',
        color === 'error' ? 'text-error' : 'green',
        'notranslate',
        'inline-flex',
        'justify-center',
        'items-center',
        'leading-none',
        'tracking-normal',
        'align-middle',
        'select-none'
      )}
      style={{
        fontSize: size && size + 'px',
        width: size && size + 'px',
        height: size && size + 'px',
      }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        role="img"
        aria-hidden="true"
        className={clsx(
          'fill-current',
          !(small || large) && 'w-6 h-6',
          small && 'text-base w-4 h-4',
          large && 'text-[2rem] w-8 h-8'
        )}
        style={{
          fontSize: size && size + 'px',
          width: size && size + 'px',
          height: size && size + 'px',
        }}
      >
        <path d={name}></path>
      </svg>
    </span>
  );
};
