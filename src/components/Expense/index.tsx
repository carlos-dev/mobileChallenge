import React from 'react';
import moment from 'moment';
import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';
import { AppScreens } from '../../routes';

type AdditionalInfo = { description?: string };

type ExpenseProps = {
  _id: string;
  date: string;
  item: string;
  value: number;
  additionalInfo: AdditionalInfo;
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
      <Text style={styles.expenseDescription}>{data.additionalInfo.description}</Text>
      <View style={styles.divider} />
    </View>
    <Text style={styles.expenseDate}>{moment.utc(data.date).format('DD/MM/YYYY')}</Text>
  </TouchableOpacity>
);
