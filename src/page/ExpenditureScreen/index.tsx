import React from 'react';
import {
  View, Text, TouchableOpacity, ScrollView,
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import moment from 'moment';

import { useExpense } from '../../hooks/useExpense';

import { styles } from './styles';

export function ExpenditureScreen() {
  const { expenses } = useExpense();

  const contentWhitoutExpenses = () => (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Não há despesas</Text>
      <RectButton style={styles.button}>
        <Text style={styles.textButton}>Adicionar Despesa</Text>
      </RectButton>
    </View>
  );

  const contentExpenses = () => (
    <ScrollView contentContainerStyle={styles.scrollView}>
      {expenses.map((expense) => (
        <TouchableOpacity style={styles.expense} key={expense._id} activeOpacity={0.7}>
          <View>
            <Text style={styles.expenseText}>{expense.item}</Text>
            <Text style={styles.expenseText}>{expense.value}</Text>
          </View>
          <Text style={styles.expenseDate}>{moment.utc(expense.date).format('DD/MM/YYYY')}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
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
