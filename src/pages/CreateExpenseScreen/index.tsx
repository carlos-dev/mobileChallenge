/* eslint-disable max-len */
import React, { FunctionComponent, useState } from 'react';
import {
  View, Text, TextInput, ActivityIndicator, KeyboardAvoidingView, Platform, ScrollView,
} from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { RectButton } from 'react-native-gesture-handler';
import { StackNavigationProp } from '@react-navigation/stack';

import { styles } from './styles';
import { global } from '../../styles/global';

import { Header } from '../../components/Header';

import { createExpense } from '../../services/createExpense';
import { useExpense } from '../../hooks/useExpense';

import { AppScreens, StackParamList } from '../../routes';
import { SnackbarComponent } from '../../components/Snackbar';

type CreateScreenNavigationProps = StackNavigationProp<StackParamList, AppScreens.CreateExpense>;

interface CreateExpenseScreenProps {
  navigation: CreateScreenNavigationProps;
}

export const CreateExpenseScreen: FunctionComponent<CreateExpenseScreenProps> = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [date, setDate] = useState('');
  const [item, setItem] = useState('');
  const [value, setValue] = useState(0);
  const [description, setDescription] = useState('');

  const { getExpenses } = useExpense();

  const handleCreateExpense = async () => {
    const dateSplit = date.split('/');

    const dateFormatted = `${dateSplit[2]}-${dateSplit[1]}-${dateSplit[0]}`;

    setLoading(true);

    const response = await createExpense({
      date: dateFormatted,
      item,
      value,
      additionalInfo: {
        description,
      },
    });

    if (response !== null) {
      setDate('');
      setItem('');
      setValue(0);
      getExpenses();
      navigation.goBack();
    } else {
      setError(true);
    }

    setLoading(false);

    setTimeout(() => {
      setError(false);
    }, 3000);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
    >
      <ScrollView contentContainerStyle={global.alignCenter} style={styles.container}>
        <Header navigation={navigation} title="Criar despesa" hasBackButton />

        <View style={global.viewInput}>
          <Text style={global.label}>Item</Text>
          <TextInput
            style={global.input}
            value={item}
            onChangeText={(text) => setItem(text)}
          />
        </View>

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
          <Text style={global.label}>Valor</Text>
          <TextInput
            keyboardType="numeric"
            value={value.toString()}
            style={global.input}
            onChangeText={(text) => setValue(Number(text))}
          />
        </View>

        <View style={global.viewInput}>
          <Text style={global.label}>Descrição</Text>
          <TextInput
            multiline
            numberOfLines={3}
            style={global.input}
            value={description}
            onChangeText={(text) => setDescription(text)}
          />
        </View>

        <RectButton style={global.button} onPress={handleCreateExpense}>
          {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text style={global.textButton}>Salvar</Text>
          )}
        </RectButton>

        <SnackbarComponent error={error} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
