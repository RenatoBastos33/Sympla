import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Text, TextProps} from 'react-native';
import styles from './styles';

type LinkTextProps = TextProps & {};

const LinkText: React.FC<LinkTextProps> = ({
  children,
  style,
}: LinkTextProps) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default LinkText;
