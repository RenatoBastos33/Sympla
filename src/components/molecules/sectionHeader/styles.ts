import {pixelSizeHorizontal} from '@utils/normalize';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {StyleSheet, ViewStyle} from 'react-native';

interface Styles {
  container: ViewStyle;
}

export default StyleSheet.create<Styles>({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: pixelSizeHorizontal(10),
  },
});
