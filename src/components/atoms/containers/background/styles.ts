// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {HORIZONTAL_SPACE_8} from '../../../../styles/spacing';

interface Styles {
  container: ViewStyle;
}

export default StyleSheet.create<Styles>({
  container: {
    paddingHorizontal: HORIZONTAL_SPACE_8,
  },
});
