import {Colors} from '@styles';
import {pixelSizeVertical} from '@utils/normalize';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {ImageStyle, StyleSheet} from 'react-native';

interface Styles {
  image: ImageStyle;
}

const DEFAULT_HEIGHT = 190;

export default StyleSheet.create<Styles>({
  image: {
    height: pixelSizeVertical(DEFAULT_HEIGHT),
    width: (pixelSizeVertical(DEFAULT_HEIGHT) * 16) / 9,
    borderRadius: 4,
    elevation: 10,
    backgroundColor: Colors.WHITE,
  },
});
