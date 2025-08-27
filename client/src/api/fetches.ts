import { api } from '../utils/api.ts';

export const sendMessage = async (message: string): Promise<string> => {
  const data = await api.post<{ reply: string }>('/message', { message });
  return data.reply;
};
