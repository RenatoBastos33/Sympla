// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {StyleSheet, ViewStyle} from 'react-native';
import {HORIZONTAL_PADDING_APP} from '../../../../styles/spacing';

interface Styles {
  container: ViewStyle;
}

export default StyleSheet.create<Styles>({
  container: {
    paddingHorizontal: HORIZONTAL_PADDING_APP,
    flex: 1,
  },
});
