import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Image, View, ViewProps} from 'react-native';
import styles from './styles';

// import { Container } from './styles';

type SpotlightCardProps = ViewProps & {
  imageUrl: string;
};

const SpotlightCard: React.FC<SpotlightCardProps> = ({
  imageUrl,
  style,
  ...rest
}: SpotlightCardProps) => {
  return (
    <View style={[styles.container, style]} {...rest}>
      <Image source={require(imageUrl)} />
    </View>
  );
};

export default SpotlightCard;
