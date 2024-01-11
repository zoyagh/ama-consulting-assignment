export interface ButtonColors {
  error: 'text-error';
  white: 'text-white';
  default: 'text-dark-blue';
}


export interface ButtonBackgroundColors {
  error: 'bg-error';
  white: 'bg-white';
  default: 'bg-light-gray-100';
}

export const buttonBackgroundColors: ButtonBackgroundColors = {
  error: 'bg-error',
  white: 'bg-white',
  default: 'bg-light-gray-100',
};

export interface ButtonHovers {
  error: 'hover:bg-error';
  default: 'hover:bg-light-gray-200';
}


export interface ButtonBorders {
  error: 'border-2 border-error';
  white: 'border-2 border-white';
  default: 'border-2 border-dark-blue';
}

export const buttonBorders: ButtonBorders = {
  error: 'border-2 border-error',
  white: 'border-2 border-white',
  default: 'border-2 border-dark-blue',
};
