import { api } from './api';

export const getExpenses = async () => {
  try {
    const response = await api.get('/expenses?page=1&perPage=10');

    return response.data;
  } catch (error: any) {
    console.log(error.response.data);
  }

  return null;
};
