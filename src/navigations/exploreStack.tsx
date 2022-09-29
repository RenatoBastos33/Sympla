import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ExploreScreen from '@views/explore';
import React from 'react';

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
