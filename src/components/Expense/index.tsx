import React from 'react';
import moment from 'moment';
import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';
import { AppScreens } from '../../routes';

type ExpenseProps = {
  _id: string;
  date: string;
  item: string;
  value: number;
  additionalInfo: Object;
}

type Props = {
  data: ExpenseProps;
  navigation: any;
}

export const Expense = ({ data, navigation }: Props) => (
  <TouchableOpacity
    style={styles.expense}
    activeOpacity={0.7}
    onPress={() => navigation.navigate(AppScreens.EditExpense, { id: data._id })}
  >
    <View>
      <Text style={styles.expenseText}>{data.item}</Text>
      <Text style={styles.expenseText}>{data.value}</Text>
    </View>
    <Text style={styles.expenseDate}>{moment.utc(data.date).format('DD/MM/YYYY')}</Text>
  </TouchableOpacity>
);
