import { StyleSheet } from 'react-native';

import { scaleFontSize } from '../../utils/scaleFontSize';

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

  expenseList: {
    alignItems: 'center',
  },

  footer: {
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    paddingBottom: 20,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 10,
    shadowRadius: 0.41,
    elevation: 10,
  },
});
