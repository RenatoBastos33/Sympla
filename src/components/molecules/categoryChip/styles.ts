// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {VERTICAL_SPACE_8} from '../../../styles/spacing';

interface Styles {
  container: ViewStyle;
  image: ImageStyle;
  text: TextStyle;
}

export default StyleSheet.create<Styles>({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    marginBottom: VERTICAL_SPACE_8,
  },
  text: {textAlign: 'center'},
});
