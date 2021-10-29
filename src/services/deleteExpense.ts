import { api } from './api';

export const deletexpense = async (id: string) => {
  try {
    const response = await api.delete(`/expenses/${id}`);

    return response.data;
  } catch (error: any) {
    console.log(error.response.data);
  }

  return null;
};
