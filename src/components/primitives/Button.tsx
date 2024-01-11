import type {ButtonColors} from '@/utils/buttonColors';

import {ForwardedRef, forwardRef} from 'react';
import clsx from 'clsx';

import {
  buttonBackgroundColors,
  buttonBorders,
} from '@/utils/';

interface ButtonProps {
  className?: string;
  style?: React.CSSProperties;
  type?: 'button' | 'submit' | 'reset';
  color?: keyof ButtonColors;
  rounded?: boolean;
  disabled?: boolean;
  loading?: boolean;
  width?: string | number;
  height?: string | number;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onBlur?: React.FocusEventHandler<HTMLButtonElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLButtonElement>;
}

export const Button = forwardRef<HTMLButtonElement, React.PropsWithChildren<ButtonProps>>(
  (
    {
      children,
      className,
      style,
      type,
      color = 'default',
      rounded,
      disabled,
      width,
      height,
      onClick,
      onBlur,
      onKeyDown,
    },
    ref
  ) => {
    const handleBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      onClick && onClick(e);
    };

    return (
      <button
        ref={ref  as ForwardedRef<HTMLButtonElement>}
        type={type}
        className={clsx(
          className,
          'relative no-underline select-none align-middle whitespace-nowrap overflow-hidden',
          'items-center justify-center tracking-[0.0892857143em] uppercase',
          'font-bold transition-all duration-300',
          'inline-flex flex-[0_0_auto]',
          !rounded && 'rounded-lg',
          rounded && 'rounded-[28px]',
          buttonBackgroundColors[color],
          buttonBorders[color],
          'w-9 h-9',
          'text-sm',
          !width && 'min-w-[92px]',
        )}
        style={{
          ...style,
          width: width && `${width}px`,
          height: height && `${height}px`,
        }}
        disabled={disabled}
        onKeyDown={onKeyDown}
        onClick={handleBtnClick}
        onBlur={onBlur}
      >
        <span
          className={clsx(
            'flex flex-[1_0_auto] items-center text-inherit leading-normal',
            'justify-center',
          )}
        >
          {children}
        </span>
      </button>
    );
  }
);

Button.displayName = 'Button';
