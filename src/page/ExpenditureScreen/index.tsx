import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { useExpense } from '../../hooks/useExpense';

import { Header } from '../../components/Header';
import { Expense } from '../../components/Expense';

import { styles } from './styles';

export const ExpenditureScreen = ({ navigation }) => {
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
    <FlatList
      data={expenses}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => (
        <Expense data={item} navigation={navigation} />
      )}
    />
  );

  return (
    <View style={styles.container}>
      <Header navigation={navigation} title="Despesa" />

      {expenses.length ? (
        contentExpenses()
      ) : (
        contentWhitoutExpenses()
      )}
    </View>
  );
};
