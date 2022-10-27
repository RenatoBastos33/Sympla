import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Image, ImageProps} from 'react-native';
import styles from './styles';

// import { Container } from './styles';

type FeaturedEventCardProps = ImageProps & {
  imageUrl: string;
};

const FeaturedEventCard: React.FC<FeaturedEventCardProps> = ({
  imageUrl,
  ...rest
}: FeaturedEventCardProps) => {
  return <Image style={styles.image} source={{uri: imageUrl}} {...rest} />;
};

export default FeaturedEventCard;
