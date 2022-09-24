// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {StyleSheet, ViewStyle} from 'react-native';
import {VERTICAL_SPACE_12} from '../../../styles/spacing';

interface Styles {
  container: ViewStyle;
  header: ViewStyle;
}

export default StyleSheet.create<Styles>({
  container: {
    paddingVertical: VERTICAL_SPACE_12,
  },
  header: {
    marginBottom: VERTICAL_SPACE_12,
  },
});
