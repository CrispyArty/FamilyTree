import { api } from './index';

export const signUp = (params: { [x: string]: unknown }) => {
  return api.post('/users/sign_up', params);
};
