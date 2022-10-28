import {HORIZONTAL_SPACE_12, HORIZONTAL_SPACE_4} from '@app/styles/spacing';
import {Colors} from '@styles';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {StyleSheet, ViewStyle} from 'react-native';

interface Styles {
  container: ViewStyle;
  iconContainer: ViewStyle;
}

export default StyleSheet.create<Styles>({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: HORIZONTAL_SPACE_4,
    elevation: 2,
    borderRadius: 4,
    backgroundColor: Colors.WHITE,
  },
  iconContainer: {
    marginHorizontal: HORIZONTAL_SPACE_12,
  },
});
