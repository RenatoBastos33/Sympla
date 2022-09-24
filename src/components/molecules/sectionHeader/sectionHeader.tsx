import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {GestureResponderEvent, View, ViewProps} from 'react-native';
import LinkText from '../../atoms/text/linkText';
import Title from '../../atoms/text/title';
import styles from './styles';

// import { Container } from './styles';
export type SectionHeaderProps = ViewProps & {
  title: string;
  buttonText?: string;
  onButtonPress?: (event: GestureResponderEvent) => void;
};

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  buttonText,
  onButtonPress,
  style,
}: SectionHeaderProps) => {
  return (
    <View style={[styles.container, style]}>
      <Title>{title}</Title>
      <LinkText onPress={onButtonPress}>{buttonText}</LinkText>
    </View>
  );
};

export default SectionHeader;
