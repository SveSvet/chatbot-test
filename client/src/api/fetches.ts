import { api } from '../utils/api.ts';

type TFetchesResponse = {
  reply: string;
  id: string;
};

export const sendMessage = async (
  message: string,
): Promise<TFetchesResponse> => {
  return await api.post<TFetchesResponse>('/message', { message });
};
