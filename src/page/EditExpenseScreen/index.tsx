import React, { useEffect, useState } from 'react';
import {
  View, Text, TextInput, ActivityIndicator,
} from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/core';
import { TextInputMask } from 'react-native-masked-text';
import { RectButton } from 'react-native-gesture-handler';

import moment from 'moment';
import { styles } from './styles';
import { global } from '../../styles/global';
import { useExpense } from '../../hooks/useExpense';
import { Header } from '../../components/Header';
import { getExpense } from '../../services/getExpense';

type ParamList = {
  Detail: {
    id: string;
  }
};

type ExpenseProps = {
  value: number;
  item: string;
  date: string;
  additionalInfo: Object;
}

export const EditExpenseScreen = ({ navigation }: any) => {
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState('');
  const [item, setItem] = useState('');
  const [value, setValue] = useState(0);

  const { editExpense } = useExpense();
  const route: any = useRoute<RouteProp<ParamList, 'Detail'>>();

  useEffect(() => {
    const handleGetExpense = async () => {
      try {
        const data: ExpenseProps = await getExpense(route.params.id);

        setDate(moment.utc(data.date).format('DD/MM/YYYY'));
        setItem(data.item);
        setValue(data.value);
      } catch (error: any) {
        console.log(error.response.data);
      }
    };

    handleGetExpense();
  }, []);

  const handleEditExpense = async () => {
    const dateSplit = date.split('/');

    const dateFormatted = `${dateSplit[2]}-${dateSplit[1]}-${dateSplit[0]}`;

    setLoading(true);

    try {
      await editExpense({
        date: dateFormatted,
        item,
        value,
        additionalInfo: {},
      });
    } catch (error: any) {
      console.log(error.response.data);
    }
  };

  return (
    <View style={styles.container}>
      <Header navigation={navigation} title="Editar despesa" hasBackButton />

      <View style={global.viewInput}>
        <Text style={global.label}>Data</Text>
        <TextInputMask
          type="datetime"
          options={{
            format: 'DD/MM/YYYY',
          }}
          value={date}
          onChangeText={(text) => setDate(text)}
          style={global.input}
        />
      </View>

      <View style={global.viewInput}>
        <Text style={global.label}>Item</Text>
        <TextInput
          style={global.input}
          value={item}
          onChangeText={(text) => setItem(text)}
        />
      </View>

      <View style={global.viewInput}>
        <Text style={global.label}>Valor</Text>
        <TextInput
          keyboardType="numeric"
          value={value.toString()}
          style={global.input}
          onChangeText={(text) => setValue(Number(text))}
        />
      </View>

      <RectButton style={global.button} onPress={handleEditExpense}>
        {loading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text style={global.textButton}>Salvar</Text>
        )}
      </RectButton>

      <RectButton style={[global.button, styles.buttonDelete]}>
        {loading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text style={global.textButton}>Excluir</Text>
        )}
      </RectButton>
    </View>
  );
};
