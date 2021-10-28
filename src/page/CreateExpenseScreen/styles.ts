import { StyleSheet } from 'react-native';
import scaleFontSize from '../../utils/scaleFontSize';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
