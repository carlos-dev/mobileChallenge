import { api } from './api';

import { ExpenseWhitoutId } from '../@types/expenseProps';

export const createExpense = async (expense: ExpenseWhitoutId) => {
  try {
    const response = await api.post('/expenses', expense);

    return response.data;
  } catch (error: any) {
    console.log(error.response.data);
  }

  return null;
};
