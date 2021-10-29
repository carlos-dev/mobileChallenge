import { api } from './api';

import { Expense } from '../@types/expenseProps';

export const editExpense = async (expense: Expense) => {
  try {
    const response = await api.put(`/expenses/${expense._id}`, {
      date: expense.date,
      item: expense.item,
      value: expense.value,
      additionalInfo: {},
    });

    console.log('expenseInput', response.data);
    // return response.data;
  } catch (error: any) {
    console.log(error.response.data);
  }
};
