import React from 'react';
import { View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { useExpense } from '../../hooks/useExpense';

import { styles } from './styles';

export function ExpenditureScreen() {
  const { expenses } = useExpense();

  console.log(expenses);

  const contentWhitoutExpenses = () => (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Não há despesas</Text>
      <RectButton style={styles.button}>
        <Text style={styles.textButton}>Adicionar Despesa</Text>
      </RectButton>
    </View>
  );

  return (
    <View style={styles.container}>
      {expenses.lenght ? (
        <Text>ExpendituredScreen</Text>
      ) : (
        contentWhitoutExpenses()
      )}
    </View>
  );
}
