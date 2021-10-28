import React, { useState } from 'react';
import {
  View, Text, TextInput, ActivityIndicator,
} from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { RectButton, BorderlessButton } from 'react-native-gesture-handler';
import IconArrow from 'react-native-vector-icons/AntDesign';

import { styles } from './styles';
import { global } from '../../styles/global';
import { useExpense } from '../../hooks/useExpense';
import scaleFontSize from '../../utils/scaleFontSize';

export const CreateExpenseScreen = ({ navigation }: any) => {
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState('');
  const [item, setItem] = useState('');
  const [value, setValue] = useState(0);

  const { createExpense } = useExpense();

  const handleCreateExpense = async () => {
    const dateSplit = date.split('/');

    const dateFormatted = `${dateSplit[2]}-${dateSplit[1]}-${dateSplit[0]}`;

    setLoading(true);
    try {
      await createExpense({
        date: dateFormatted,
        item,
        value,
        additionalInfo: {},
      });

      setDate('');
      setItem('');
      setValue(0);
    } catch (error: any) {
      console.log(error.response.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <BorderlessButton style={styles.buttonIcon} onPress={() => navigation.goBack()}>
          <IconArrow name="arrowleft" size={scaleFontSize(18)} color="#333" />
        </BorderlessButton>

        <Text style={styles.title}>Criar despesa</Text>
      </View>

      <View style={styles.viewInput}>
        <Text style={styles.label}>Data</Text>
        <TextInputMask
          type="datetime"
          options={{
            format: 'DD/MM/YYYY',
          }}
          value={date}
          onChangeText={(text) => setDate(text)}
          style={styles.input}
        />
      </View>

      <View style={styles.viewInput}>
        <Text style={styles.label}>Item</Text>
        <TextInput
          style={styles.input}
          value={item}
          onChangeText={(text) => setItem(text)}
        />
      </View>

      <View style={styles.viewInput}>
        <Text style={styles.label}>Valor</Text>
        <TextInput
          keyboardType="numeric"
          value={value.toString()}
          style={styles.input}
          onChangeText={(text) => setValue(Number(text))}
        />
      </View>

      <RectButton style={global.button} onPress={handleCreateExpense}>
        {loading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text style={global.textButton}>Salvar</Text>
        )}
      </RectButton>
    </View>
  );
};
