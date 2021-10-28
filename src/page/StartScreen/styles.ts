import { StyleSheet } from 'react-native';

import scaleFontSize from '../../utils/scaleFontSize';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc',
  },

  label: {
    fontSize: scaleFontSize(15),
    marginBottom: 20,
  },

  input: {
    width: '90%',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },

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
