import ApiFactory from './ApiFactory';

export const getGlobalDataApi = (): ApiFactory<Array<{}>, unknown> => {
  return new ApiFactory({
    path: '',
  });
};
