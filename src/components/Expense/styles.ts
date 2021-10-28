import { StyleSheet } from 'react-native';
import scaleFontSize from '../../utils/scaleFontSize';

export const styles = StyleSheet.create({
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
  },
});
