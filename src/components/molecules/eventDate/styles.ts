import {Colors} from '@styles';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {StyleSheet, TextProps, ViewStyle} from 'react-native';

interface Styles {
  container: ViewStyle;
  text: TextProps;
  divisor: TextProps;
}

export default StyleSheet.create<Styles>({
  container: {
    flexDirection: 'row',
  },
  text: {
    color: Colors.PRIMARY,
  },
  divisor: {
    color: Colors.GRAY_DARK,
  },
});
