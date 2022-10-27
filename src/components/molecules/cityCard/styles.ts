import {FONT_BOLD} from '@app/styles/typography';
import {Colors} from '@styles';
import {pixelSizeVertical} from '@utils/normalize';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface Styles {
  image: ImageStyle;
  text: TextStyle;
  container: ViewStyle;
}

const DEFAULT_WIDTH = 150;
const DEFAULT_HEIGHT = 200;

export default StyleSheet.create<Styles>({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: pixelSizeVertical(DEFAULT_WIDTH),
    height: pixelSizeVertical(DEFAULT_HEIGHT),
    borderRadius: 4,
    elevation: 10,
    backgroundColor: Colors.WHITE,
  },
  text: {
    bottom: pixelSizeVertical(30),
    color: Colors.WHITE,
    ...FONT_BOLD,
  },
});
