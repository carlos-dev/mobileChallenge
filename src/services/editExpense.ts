import { api } from './api';

import { ExpenseInput } from '../@types/expenseProps';

export const editExpense = async (expenseInput: ExpenseInput) => {
  try {
    const response = await api.put('/expenses', expenseInput);
    console.log('expenseInput', response.data);
    // return response.data;
  } catch (error: any) {
    console.log(error.response.data);
  }
};
