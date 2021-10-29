import { StyleSheet } from 'react-native';

import { scaleFontSize } from '../utils/scaleFontSize';

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

  viewInput: {
    marginBottom: 30,
    width: '90%',
  },

  label: {
    color: '#333',
    fontSize: scaleFontSize(13),
    marginBottom: 10,
  },

  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    fontSize: scaleFontSize(13),
    paddingHorizontal: 10,
  },
});
