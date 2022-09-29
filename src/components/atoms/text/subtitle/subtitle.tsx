import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Text, TextProps} from 'react-native';
import styles from './styles';

// import { Container } from './styles';

type SubtitleProps = TextProps & {};

const Subtitle: React.FC<SubtitleProps> = ({
  style,
  children,
}: SubtitleProps) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default Subtitle;
