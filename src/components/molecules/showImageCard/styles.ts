// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Colors} from '@styles';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {ImageStyle, StyleSheet, ViewStyle} from 'react-native';

interface Styles {
  iconsContainer: ViewStyle;
  container: ViewStyle;
  image: ImageStyle;
}

export default StyleSheet.create<Styles>({
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  container: {
    elevation: 1,
    backgroundColor: Colors.WHITE,
    borderRadius: 4,
  },
  image: {
    borderRadius: 4,
    margin: 1,
  },
});
