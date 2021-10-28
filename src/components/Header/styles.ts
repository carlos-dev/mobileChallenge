import { StyleSheet } from 'react-native';
import scaleFontSize from '../../utils/scaleFontSize';

export const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: '4%',
    backgroundColor: '#ddd',
    marginBottom: '7%',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 5,
  },

  title: {
    color: '#333',
    fontSize: scaleFontSize(13),
    textAlign: 'center',
  },

  buttonIcon: {
    position: 'absolute',
    alignSelf: 'center',
    left: '5%',
  },
});
