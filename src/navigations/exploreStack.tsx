import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import ExploreScreen from '../views/explore';

// import { Container } from './styles';
const {Navigator, Screen} = createNativeStackNavigator();

const ExploreStack: React.FC = () => {
  return (
    <Navigator>
      <Screen name="Explore" component={ExploreScreen} />
    </Navigator>
  );
};

export default ExploreStack;
