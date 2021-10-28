import React from 'react';
import { ExpenseProvider } from './src/hooks/useExpense';
import { StackNavigation } from './src/routes';

export default function App() {
  return (
    <ExpenseProvider>
      <StackNavigation />
    </ExpenseProvider>
  );
}
