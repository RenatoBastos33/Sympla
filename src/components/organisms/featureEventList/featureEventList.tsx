import {HORIZONTAL_PADDING_APP, HORIZONTAL_SPACE_16} from '@app/styles/spacing';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Event} from '@app/types/eventTypes';
import FeaturedEventCard from '@atoms/featuredEventCard';
import React from 'react';
import {FlatList, View} from 'react-native';
import styles from './styles';

// import { Container } from './styles';

type EventListProps = {
  data: Array<Event> | undefined | null;
};

const FeatureEventList: React.FC<EventListProps> = ({data}: EventListProps) => {
  return (
    <FlatList
      data={data}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{marginHorizontal: -HORIZONTAL_PADDING_APP}}
      contentContainerStyle={{marginLeft: HORIZONTAL_SPACE_16}}
      renderItem={({item}) => (
        <View style={styles.container}>
          <FeaturedEventCard imageUrl={item.imageUrl} />
        </View>
      )}
    />
  );
};

export default FeatureEventList;
