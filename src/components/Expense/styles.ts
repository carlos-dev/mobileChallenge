import { StyleSheet } from 'react-native';

import { scaleFontSize } from '../../utils/scaleFontSize';

export const styles = StyleSheet.create({
  expense: {
    width: '90%',
    backgroundColor: '#fff',
    marginBottom: '3%',
    paddingVertical: '4%',
    paddingHorizontal: '4%',
    borderRadius: 5,
    justifyContent: 'space-between',
    alignSelf: 'center',

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
    alignSelf: 'flex-end',
  },

  expenseDescription: {
    fontSize: scaleFontSize(12),
  },

  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: '2%',
  },
});
