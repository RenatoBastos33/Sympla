// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {StyleSheet, TextStyle} from 'react-native';
import {Colors} from '../../../../styles';
import {FONT_REGULAR, FONT_SIZE_12} from '../../../../styles/typography';

interface Styles {
  text: TextStyle;
}

export default StyleSheet.create<Styles>({
  text: {
    ...FONT_REGULAR,
    fontSize: FONT_SIZE_12,
    color: Colors.BLACK,
  },
});
