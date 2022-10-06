// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {GRAY_DARK} from '@app/styles/colors';
import {VERTICAL_SPACE_4} from '@app/styles/spacing';
import {pixelSizeHorizontal} from '@utils/normalize';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface Styles {
  textContainer: ViewStyle;
  location: TextStyle;
  date: ViewStyle;
}

export default StyleSheet.create<Styles>({
  textContainer: {
    width: (pixelSizeHorizontal(80) * 16) / 9,
  },
  location: {
    color: GRAY_DARK,
    fontWeight: '600',
  },
  date: {
    marginVertical: VERTICAL_SPACE_4,
  },
});
