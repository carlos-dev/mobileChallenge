import React, {
  createContext, useState, useContext, ReactNode,
} from 'react';
import { api } from '../services/api';

interface Expense {
  date: string;
  item: string;
  value: number;
  additionalInfo: Object;
}

interface ExpenseProviderProps {
  children: ReactNode;
}

interface ExpensesContextData {
  expenses: Expense[];
  login: () => Promise<void>;
  createExpense: (expense: Expense) => Promise<void>;
}

const ExpenseContext = createContext<ExpensesContextData>({} as ExpensesContextData);

export const ExpenseProvider = ({ children }: ExpenseProviderProps) => {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  // useEffect(() => {
  //   api.get('/expenses').then((response: AxiosResponse) => {
  //     console.log(response.data);
  //   });
  // });

  const createExpense = async (expenseInput: Expense) => {
    try {
      console.log('expenseInput', expenseInput);

      await api.post('/expenses', expenseInput);

      setExpenses([...expenses, expenseInput]);
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
    <ExpenseContext.Provider value={{ expenses, login, createExpense }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export const useExpense = () => {
  const context = useContext(ExpenseContext);

  return context;
};
