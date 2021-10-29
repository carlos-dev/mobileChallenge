import React, { FunctionComponent, useEffect, useState } from 'react';
import {
  View, Text, TextInput, ActivityIndicator, ScrollView,
} from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/core';
import { TextInputMask } from 'react-native-masked-text';
import { RectButton } from 'react-native-gesture-handler';
import moment from 'moment';
import { StackNavigationProp } from '@react-navigation/stack';

import { styles } from './styles';
import { global } from '../../styles/global';

import { useExpense } from '../../hooks/useExpense';

import { Header } from '../../components/Header';
import { SnackbarComponent } from '../../components/Snackbar';

import { getExpense } from '../../services/getExpense';
import { deletexpense } from '../../services/deleteExpense';
import { editExpense } from '../../services/editExpense';

import { AppScreens, StackParamList } from '../../routes';

type ParamList = {
  Detail: {
    id: string;
  }
};

enum Loading {
  default = 'DEFAULT',
  edit = 'EDIT',
  delete = 'DELETE',
}

type EditScreenNavigationProps = StackNavigationProp<StackParamList, AppScreens.EditExpense>;

interface EditExpenseScreenProps {
  navigation: EditScreenNavigationProps;
}

export const EditExpenseScreen: FunctionComponent<EditExpenseScreenProps> = ({ navigation }) => {
  const [loading, setLoading] = useState<Loading>(Loading.default);
  const [error, setError] = useState(false);
  const [date, setDate] = useState('');
  const [item, setItem] = useState('');
  const [value, setValue] = useState(0);
  const [description, setDescription] = useState('');

  const { getExpenses } = useExpense();
  const route: any = useRoute<RouteProp<ParamList, 'Detail'>>();

  useEffect(() => {
    const handleGetExpense = async () => {
      try {
        const data = await getExpense(route.params.id);

        setDate(moment.utc(data.date).format('DD/MM/YYYY'));
        setItem(data.item);
        setValue(data.value);
        setDescription(data.additionalInfo.description);
      } catch (err: any) {
        console.log(err.response.data);
      }
    };

    handleGetExpense();
  }, []);

  const handleEditExpense = async () => {
    const dateSplit = date.split('/');

    const dateFormatted = `${dateSplit[2]}-${dateSplit[1]}-${dateSplit[0]}`;

    setLoading(Loading.edit);

    const objExpense = {
      _id: route.params.id,
      date: dateFormatted,
      item,
      value,
      additionalInfo: {
        description,
      },
    };

    const response = await editExpense(objExpense);

    if (response !== null) {
      getExpenses();
      navigation.goBack();
    } else {
      setError(true);
    }
    setLoading(Loading.default);

    setTimeout(() => {
      setError(false);
    }, 3000);
  };

  const handleDeleteExpense = async () => {
    setLoading(Loading.delete);

    const response = await deletexpense(route.params.id);

    if (response) {
      getExpenses();
      navigation.goBack();
    }
    setLoading(Loading.default);
  };

  return (
    <ScrollView contentContainerStyle={styles.alignCenter} style={styles.container}>
      <Header navigation={navigation} title="Editar despesa" hasBackButton />

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

      <RectButton style={global.button} onPress={handleEditExpense}>
        {loading === 'EDIT' ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text style={global.textButton}>Salvar</Text>
        )}
      </RectButton>

      <RectButton style={[global.button, styles.buttonDelete]} onPress={handleDeleteExpense}>
        {loading === 'DELETE' ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text style={global.textButton}>Excluir</Text>
        )}
      </RectButton>

      <SnackbarComponent error={error} />
    </ScrollView>
  );
};
