import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {SafeAreaView, ScrollView, ScrollViewProps} from 'react-native';
import styles from './styles';

// import { Container } from './styles';

type ScrollBackgroundProps = ScrollViewProps & {};

const ScrollBackground: React.FC<ScrollBackgroundProps> = ({
  children,
  ...rest
}: ScrollBackgroundProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView {...rest}>{children}</ScrollView>
    </SafeAreaView>
  );
};

export default ScrollBackground;
