import React, { useState, FunctionComponent } from 'react';
import {
  Text, TextInput, ActivityIndicator, View,
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackNavigationProp } from '@react-navigation/stack';

import { SnackbarComponent } from '../../components/Snackbar';

import { api } from '../../services/api';
import { AppScreens, StackParamList } from '../../routes';
import { useExpense } from '../../hooks/useExpense';

import { global } from '../../styles/global';
import { styles } from './styles';

type StartScreenNavigationProps = StackNavigationProp<StackParamList, AppScreens.Start>;

interface StartScreenProps {
  navigation: StartScreenNavigationProps;
}

export const StartScreen: FunctionComponent<StartScreenProps> = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [email, setEmail] = useState('');

  const { getExpenses } = useExpense();

  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await api.get(`/start/${email}`);

      await AsyncStorage.setItem('token', response.data.token);
      navigation.navigate(AppScreens.Expenses);
      getExpenses();
    } catch (err: any) {
      setError(true);
      console.log(err.response.data);
    } finally {
      setLoading(false);

      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Digite seu email</Text>

      <TextInput
        style={styles.input}
        autoCapitalize="none"
        onChangeText={(text) => setEmail(text)}
      />

      <RectButton style={global.button} onPress={handleLogin}>
        {loading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text style={global.textButton}>Entrar</Text>
        )}
      </RectButton>

      <SnackbarComponent error={error} />
    </View>
  );
};
