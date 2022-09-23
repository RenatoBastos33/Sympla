import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {TextProps, Text} from 'react-native';
import styles from './styles';

type ContrastTextProps = TextProps & {};

const ContrastText: React.FC<ContrastTextProps> = ({
  style,
  children,
}: ContrastTextProps) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default ContrastText;
