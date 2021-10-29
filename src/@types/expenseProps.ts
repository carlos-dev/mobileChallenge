export type Expense = {
  _id: string;
  date: string;
  item: string;
  value: number;
  additionalInfo: Object;
}

export type ExpenseWhitoutId = Omit<Expense, '_id'>;
