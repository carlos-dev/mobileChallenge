import React, {
  createContext, useState, useEffect, useContext, ReactNode,
} from 'react';
import { AxiosResponse } from 'axios';
import { api } from '../services/api';

interface ExpenseProviderProps {
  children: ReactNode;
}

interface ExpensesContextData {
  expenses: [];
  login: () => Promise<void>;
}

const ExpenseContext = createContext({});

export const ExpenseProvider = ({ children }: ExpenseProviderProps) => {
  const [expenses, setExpenses] = useState([]);

  // useEffect(() => {
  //   api.get('/expenses').then((response: AxiosResponse) => {
  //     console.log(response.data);
  //   });
  // });

  const login = async () => {
    try {
      const response = await api.get('/expenses?page=1&perPage=10');
      console.log(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <ExpenseContext.Provider value={{ expenses, login }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export const useExpense = () => {
  const context = useContext(ExpenseContext);

  return context;
};
