import { Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCALE = 325;

export function scaleFontSize(fontSize: number) {
  const ratio = fontSize / SCALE;
  const newSize = Math.round(ratio * SCREEN_WIDTH);
  return newSize;
}

export default scaleFontSize;
