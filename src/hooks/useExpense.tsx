import React, {
  createContext, useState, useContext, ReactNode, useEffect,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { api } from '../services/api';

import { Expense } from '../@types/expenseProps';

interface ExpenseProviderProps {
  children: ReactNode;
}
interface ExpensesContextData {
  expenses: Expense[];
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

  return (
    <ExpenseContext.Provider
      value={{
        expenses, getExpenses,
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
