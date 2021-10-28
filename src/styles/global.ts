import { StyleSheet } from 'react-native';
import scaleFontSize from '../utils/scaleFontSize';

export const global = StyleSheet.create({
  button: {
    width: '90%',
    marginTop: 20,
    paddingVertical: 10,
    backgroundColor: '#3f9ecc',
    borderRadius: 5,
  },

  textButton: {
    fontSize: scaleFontSize(13),
    textAlign: 'center',
    color: '#fff',
  },
});
