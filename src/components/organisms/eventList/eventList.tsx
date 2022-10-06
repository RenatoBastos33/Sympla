import {HORIZONTAL_PADDING_APP, HORIZONTAL_SPACE_16} from '@app/styles/spacing';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Event} from '@app/types/eventTypes';
import EventCard from '@molecules/eventCard';
import React from 'react';
import {FlatList, View} from 'react-native';
import styles from './styles';

type EventListProps = {
  data: Array<Event> | undefined | null;
};

const EventList: React.FC<EventListProps> = ({data}: EventListProps) => {
  return (
    <FlatList
      data={data}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{marginHorizontal: -HORIZONTAL_PADDING_APP}}
      contentContainerStyle={{marginLeft: HORIZONTAL_SPACE_16}}
      renderItem={({item}) => (
        <View style={styles.container}>
          <EventCard item={item} />
        </View>
      )}
    />
  );
};

export default EventList;
