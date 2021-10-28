import React from 'react';
import { View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { useExpense } from '../../hooks/useExpense';

import { styles } from './styles';

export function ExpenditureScreen() {
  const { expenses } = useExpense();

  console.log('expenses', expenses);

  const contentWhitoutExpenses = () => (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Não há despesas</Text>
      <RectButton style={styles.button}>
        <Text style={styles.textButton}>Adicionar Despesa</Text>
      </RectButton>
    </View>
  );

  const contentExpenses = () => (
    <View style={styles.wrapper}>

      {expenses.map((expense) => (
        <View style={styles.expense} key={expense._id}>
          <Text style={styles.expenseTitle}>{expense.item}</Text>
          <Text style={styles.expenseValue}>{expense.value}</Text>
        </View>
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      {expenses.length ? (
        contentExpenses()
      ) : (
        contentWhitoutExpenses()
      )}
    </View>
  );
}
