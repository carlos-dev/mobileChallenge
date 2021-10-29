import React, {
  createContext, useState, useContext, ReactNode, useEffect,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { api } from '../services/api';
import { editExpense } from '../services/editExpense';

import { Expense, ExpenseWhitoutId } from '../@types/expenseProps';

interface ExpenseProviderProps {
  children: ReactNode;
}
interface ExpensesContextData {
  expenses: Expense[];
  login: () => Promise<void>;
  createExpense: (expense: ExpenseWhitoutId) => Promise<void>;
  editExpense: (expense: Expense) => Promise<void>;
  getExpenses: () => Promise<void>;
}

const ExpenseContext = createContext<ExpensesContextData>({} as ExpensesContextData);

export const ExpenseProvider = ({ children }: ExpenseProviderProps) => {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const getExpenses = async () => {
    try {
      const response = await api.get('/expenses?page=1&perPage=10');
      setExpenses([...response.data]);
    } catch (error: any) {
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    const loadExpenses = async () => {
      const token = await AsyncStorage.getItem('token');

      if (token) {
        getExpenses();
      }
    };

    loadExpenses();
  }, []);

  const createExpense = async (expenseInput: ExpenseWhitoutId) => {
    try {
      console.log('expenseInput', expenseInput);

      await api.post('/expenses', expenseInput);

      // setExpenses([...expenses, expenseInput]);
    } catch (error: any) {
      console.log(error.response.data);
    }
  };

  const login = async () => {
    try {
      const response = await api.get('/expenses?page=1&perPage=10');
      console.log(response.data);
    } catch (error: any) {
      console.log(error.response.data);
    }
  };

  return (
    <ExpenseContext.Provider
      value={{
        expenses, login, createExpense, editExpense, getExpenses,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};

export const useExpense = () => {
  const context = useContext(ExpenseContext);

  return context;
};
