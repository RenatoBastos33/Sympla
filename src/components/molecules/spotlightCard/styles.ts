// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {pixelSizeVertical} from '@utils/normalize';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {StyleSheet, ViewStyle} from 'react-native';

interface Styles {
  container: ViewStyle;
}

export default StyleSheet.create<Styles>({
  container: {
    height: pixelSizeVertical(180),
    width: (pixelSizeVertical(180) * 16) / 9,
  },
});
