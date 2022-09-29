import Subtitle from '@atoms/text/subtitle';
import moment from 'moment';
import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {View, ViewProps} from 'react-native';
import styles from './styles';

// import { Container } from './styles';

type EventDateProps = ViewProps & {
  startDate: string;
  endDate: string;
};

const EventDate: React.FC<EventDateProps> = ({
  startDate,
  endDate,
}: EventDateProps) => {
  return (
    <View style={styles.container}>
      <Subtitle style={styles.text}>
        {moment(startDate).format('DD MMM.').toUpperCase()}
      </Subtitle>
      <Subtitle style={styles.divisor}>{' > '}</Subtitle>
      <Subtitle style={styles.text}>
        {moment(endDate).format('DD MMM.').toUpperCase()}
      </Subtitle>
    </View>
  );
};

export default EventDate;
