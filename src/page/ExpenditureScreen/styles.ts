import { StyleSheet } from 'react-native';

import scaleFontSize from '../../utils/scaleFontSize';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  title: {
    fontSize: scaleFontSize(15),
  },

  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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

  expenseList: {
    alignItems: 'center',
  },

});
