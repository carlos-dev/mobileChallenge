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

  scrollView: {
    alignItems: 'center',
  },

  expense: {
    width: '90%',
    backgroundColor: '#fff',
    marginBottom: '3%',
    paddingVertical: '4%',
    paddingHorizontal: '4%',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 5,
  },

  expenseText: {
    fontSize: scaleFontSize(13),
  },

  expenseDate: {
    fontSize: scaleFontSize(11),
  },
});
