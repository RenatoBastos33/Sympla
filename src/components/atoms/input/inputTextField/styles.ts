// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Colors} from '@styles';
import {StyleSheet, ViewStyle} from 'react-native';

interface Styles {
  input: ViewStyle;
}

export default StyleSheet.create<Styles>({
  input: {
    color: Colors.BLACK,
  },
});
