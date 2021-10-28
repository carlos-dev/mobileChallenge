import { StyleSheet } from 'react-native';
import scaleFontSize from '../../utils/scaleFontSize';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

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
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 4,
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
