import {forwardRef} from 'react';
import clsx from 'clsx';

const justifyOptions = {
  justify: {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    around: 'justify-around',
    between: 'justify-between',
    evenly: 'justify-evenly',
  },
  sm: {
    start: 'sm:justify-start',
    center: 'sm:justify-center',
    end: 'sm:justify-end',
    around: 'sm:justify-around',
    between: 'sm:justify-between',
    evenly: 'sm:justify-evenly',
  },
  md: {
    start: 'md:justify-start',
    center: 'md:justify-center',
    end: 'md:justify-end',
    around: 'md:justify-around',
    between: 'md:justify-between',
    evenly: 'md:justify-evenly',
  },
  lg: {
    start: 'lg:justify-start',
    center: 'lg:justify-center',
    end: 'lg:justify-end',
    around: 'lg:justify-around',
    between: 'lg:justify-between',
    evenly: 'lg:justify-evenly',
  },
  xl: {
    start: 'xl:justify-start',
    center: 'xl:justify-center',
    end: 'xl:justify-end',
    around: 'xl:justify-around',
    between: 'xl:justify-between',
    evenly: 'xl:justify-evenly',
  },
};

type JustifyOption = keyof typeof justifyOptions.justify;

const alignOptions = {
  align: {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    baseline: 'items-baseline',
    stretch: 'items-stretch',
  },
  sm: {
    start: 'sm:items-start',
    center: 'sm:items-center',
    end: 'sm:items-end',
    baseline: 'sm:items-baseline',
    stretch: 'sm:items-stretch',
  },
  md: {
    start: 'md:items-start',
    center: 'md:items-center',
    end: 'md:items-end',
    baseline: 'md:items-baseline',
    stretch: 'md:items-stretch',
  },
  lg: {
    start: 'lg:items-start',
    center: 'lg:items-center',
    end: 'lg:items-end',
    baseline: 'lg:items-baseline',
    stretch: 'lg:items-stretch',
  },
  xl: {
    start: 'xl:items-start',
    center: 'xl:items-center',
    end: 'xl:items-end',
    baseline: 'xl:items-baseline',
    stretch: 'xl:items-stretch',
  },
};

type AlignOption = keyof typeof alignOptions.align;

interface RowProps {
  className?: string;
  style?: React.CSSProperties;
  nowrap?: boolean;
  justify?: JustifyOption;
  justifySm?: JustifyOption;
  justifyMd?: JustifyOption;
  justifyLg?: JustifyOption;
  justifyXl?: JustifyOption;
  align?: AlignOption;
  alignSm?: AlignOption;
  alignMd?: AlignOption;
  alignLg?: AlignOption;
  alignXl?: AlignOption;
  tabIndex?: -1 | 0;
  onKeyDown?: React.KeyboardEventHandler<HTMLDivElement>;
  onFocus?: React.FocusEventHandler<HTMLDivElement>;
  onBlur?: React.FocusEventHandler<HTMLDivElement>;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export const Row = forwardRef<HTMLDivElement, React.PropsWithChildren<RowProps>>(
  (
    {
      children,
      className,
      style,
      nowrap,
      justify,
      justifySm,
      justifyMd,
      justifyLg,
      justifyXl,
      align,
      alignSm,
      alignMd,
      alignLg,
      alignXl,
      tabIndex,
      onKeyDown,
      onFocus,
      onBlur,
      onClick,
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={clsx(
          className,
          'flex',
          nowrap ? 'flex-nowrap' : 'flex-wrap',
          justify && justifyOptions.justify[justify],
          justifySm && justifyOptions.sm[justifySm],
          justifyMd && justifyOptions.md[justifyMd],
          justifyLg && justifyOptions.lg[justifyLg],
          justifyXl && justifyOptions.xl[justifyXl],
          align && alignOptions.align[align],
          alignSm && alignOptions.sm[alignSm],
          alignMd && alignOptions.md[alignMd],
          alignLg && alignOptions.lg[alignLg],
          alignXl && alignOptions.xl[alignXl],
        )}
        style={style}
        tabIndex={tabIndex}
        onKeyDown={onKeyDown}
        onFocus={onFocus}
        onBlur={onBlur}
        onClick={onClick}
      >
        {children}
      </div>
    );
  }
);

Row.displayName = 'Row';
