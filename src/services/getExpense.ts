import { api } from './api';

export const getExpense = async (id: string) => {
  try {
    const response = await api.get(`/expenses/${id}`);

    return response.data;
  } catch (error: any) {
    console.log(error.response.data);
  }
};
