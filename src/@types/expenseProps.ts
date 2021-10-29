export interface Expense {
  _id: string;
  date: string;
  item: string;
  value: number;
  additionalInfo: Object;
}

export type ExpenseInput = Omit<Expense, '_id'>;
