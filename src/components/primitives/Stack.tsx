import {forwardRef} from 'react';
import clsx from 'clsx';
import React from 'react';

const spacingOptions = {
  none: 'gap-y-0',
  xs: 'gap-y-1',
  sm: 'gap-y-2',
  md: 'gap-y-4',
  lg: 'gap-y-6',
  xl: 'gap-y-8',
  '2xl': 'gap-y-10',
  '3xl': 'gap-y-12',
  '4xl': 'gap-y-14',
  '5xl': 'gap-y-16',
  '6xl': 'gap-y-24',
  '7xl': 'gap-32',
};

type SpacingOption = keyof typeof spacingOptions;

interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  spacing?: SpacingOption;
  width?: string | number;
  minWidth?: string | number;
  maxWidth?: string | number;
  height?: string | number;
  minHeight?: string | number;
  maxHeight?: string | number;
  tabIndex?: -1 | 0;
  style?: React.CSSProperties;
}

export const Stack = forwardRef<HTMLDivElement, StackProps>(
  (
    {children, className, spacing = 'md', minWidth, width, maxWidth, minHeight, height, maxHeight, style, tabIndex},
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={clsx(className, 'flex', 'flex-col', spacingOptions[spacing])}
        style={{
          width: width && width + 'px',
          minWidth: minWidth && minWidth + 'px',
          maxWidth: maxWidth && maxWidth + 'px',
          height: height && height + 'px',
          minHeight: minHeight && minHeight + 'px',
          maxHeight: maxHeight && maxHeight + 'px',
          ...(style ? style : {}),
        }}
        tabIndex={tabIndex}
      >
        {children}
      </div>
    );
  }
);

Stack.displayName = 'Stack';
