import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TicketsScreen from '@views/tickets';
import React from 'react';

// import { Container } from './styles';
const {Navigator, Screen} = createNativeStackNavigator();

const TicketStack: React.FC = () => {
  return (
    <Navigator>
      <Screen name="Tickets" component={TicketsScreen} />
    </Navigator>
  );
};

export default TicketStack;
