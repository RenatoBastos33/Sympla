import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {View, ViewStyle} from 'react-native';
import SectionHeader from '../../molecules/sectionHeader';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {SectionHeaderProps} from '../../molecules/sectionHeader/sectionHeader';
import styles from './styles';

// import { Container } from './styles';

type SectionProps = SectionHeaderProps & {
  headerStyle?: ViewStyle;
};

const Section: React.FC<SectionProps> = ({
  style,
  children,
  headerStyle,
  ...rest
}: SectionProps) => {
  return (
    <View style={[styles.container, style]}>
      <SectionHeader style={[styles.header, headerStyle]} {...rest} />
      {children}
    </View>
  );
};

export default Section;
