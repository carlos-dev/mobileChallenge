import React from 'react';
import {
  Text, TextInput, ImageBackground,
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { styles } from './styles';

import backgroundImg from '../../assets/background.jpg';

export function StartScreen() {
  return (
    <ImageBackground style={styles.container} source={backgroundImg}>
      <Text style={styles.label}>Digite seu email</Text>

      <TextInput
        style={styles.input}
        autoCapitalize="none"
      />

      <RectButton style={styles.button}>
        <Text style={styles.textButton}>Entrar</Text>
      </RectButton>
    </ImageBackground>
  );
}
