// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {City} from '@app/types/cityType';
import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Image, ImageProps, Text, View} from 'react-native';
import styles from './styles';

// import { Container } from './styles';

type CityCardProps = ImageProps & {
  item: City;
};

const CityCard: React.FC<CityCardProps> = ({item}: CityCardProps) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: item.imageUrl}} />
      <Text style={styles.text}>{item.name}</Text>
    </View>
  );
};

export default CityCard;
