// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {StyleSheet, TextStyle} from 'react-native';
import {Colors} from '../../../../styles';
import {FONT_BOLD, FONT_SIZE_16} from '../../../../styles/typography';

interface Styles {
  text: TextStyle;
}

export default StyleSheet.create<Styles>({
  text: {
    ...FONT_BOLD,
    fontSize: FONT_SIZE_16,
    color: Colors.LINK,
  },
});
