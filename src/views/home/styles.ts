// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {VERTICAL_SPACE_18} from '@app/styles/spacing';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {ImageStyle, StyleSheet, ViewStyle} from 'react-native';

interface Styles {
  recomendationsContainer: ViewStyle;
}

export default StyleSheet.create<Styles>({
  recomendationsContainer: {
    marginBottom: VERTICAL_SPACE_18,
  },
});
