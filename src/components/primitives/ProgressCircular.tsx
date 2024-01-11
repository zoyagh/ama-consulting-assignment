import React, { FC } from 'react';
import clsx from 'clsx';

interface ProgressCircularProps {
  size?: string | number;
  color?: string;
}

export const ProgressCircular: FC<ProgressCircularProps> = ({ size = 32, color = 'blue' }) => {
  const circleSize = Math.ceil(Number(size));

  return (
    <div
      className={clsx('loader', 'inline-block', 'relative')}
      style={{ width: `${circleSize}px`, height: `${circleSize}px` }}
    >
      {[0, 1, 2, 3].map((index) => (
        <div
          key={index}
          className={clsx(
            'loader-circle',
            'absolute',
            'border-t-4', 
            `border-${color}`,
            'border-solid',
            'rounded-full',
            'animate-spin',
            `animate-spin-${index * 15}`
          )}
        />
      ))}
    </div>
  );
};

export default ProgressCircular;
