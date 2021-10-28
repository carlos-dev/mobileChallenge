import React, { useState, FunctionComponent } from 'react';
import {
  Text, TextInput, ImageBackground, ActivityIndicator,
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { StackNavigationProp } from '@react-navigation/stack';
import { api } from '../../services/api';

import { styles } from './styles';

import backgroundImg from '../../assets/background.jpg';
import { AppScreens, StackParamList } from '../../routes';
import { useExpense } from '../../hooks/useExpense';

type StartScreenNavigationProps = StackNavigationProp<StackParamList, AppScreens.Start>;

interface StartScreenProps {
  navigation: StartScreenNavigationProps;
}

export const StartScreen: FunctionComponent<StartScreenProps> = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');

  const { login } = useExpense();

  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await api.get(`/start/${email}`);

      await AsyncStorage.setItem('token', response.data.token);
      navigation.navigate(AppScreens.Expenditure);
      login();
    } catch (error) {
      console.log(error.response.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ImageBackground style={styles.container} source={backgroundImg}>
      <Text style={styles.label}>Digite seu email</Text>

      <TextInput
        style={styles.input}
        autoCapitalize="none"
        onChangeText={(text) => setEmail(text)}
      />

      <RectButton style={styles.button} onPress={handleLogin}>
        {loading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text style={styles.textButton}>Entrar</Text>
        )}
      </RectButton>
    </ImageBackground>
  );
};
