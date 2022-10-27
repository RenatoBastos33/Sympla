// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {HORIZONTAL_PADDING_APP, HORIZONTAL_SPACE_16} from '@app/styles/spacing';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {City} from '@app/types/cityType';
import CityCard from '@molecules/cityCard';
import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {FlatList, View} from 'react-native';
import styles from './styles';

// import { Container } from './styles';

type CityListProps = {
  data: Array<City> | undefined | null;
};

const CityList: React.FC<CityListProps> = ({data}: CityListProps) => {
  return (
    <FlatList
      data={data}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{marginHorizontal: -HORIZONTAL_PADDING_APP}}
      contentContainerStyle={{marginLeft: HORIZONTAL_SPACE_16}}
      renderItem={({item}) => (
        <View style={styles.container}>
          <CityCard item={item} />
        </View>
      )}
    />
  );
};

export default CityList;
