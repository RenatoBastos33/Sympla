// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Event} from '@app/types/eventTypes';
import Subtitle from '@atoms/text/subtitle';
import Title from '@atoms/text/title';
import EventDate from '@molecules/eventDate';
import EventImageCard from '@molecules/showImageCard';
import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {View, ViewProps} from 'react-native';
import styles from './styles';

// import { Container } from './styles';

type EventCardProps = ViewProps & {
  item: Event;
};

const EventCard: React.FC<EventCardProps> = ({item}: EventCardProps) => {
  return (
    <View>
      <EventImageCard source={{uri: item.imageUrl}} />
      <View style={styles.textContainer}>
        <EventDate
          style={styles.date}
          startDate={item.startDate}
          endDate={item.endDate}
        />
        <Title numberOfLines={2}>{item.title}</Title>
        <Subtitle style={styles.location}>{item.location}</Subtitle>
      </View>
    </View>
  );
};

export default EventCard;
