import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import HomeScreen from '../views/home/home';

// import { Container } from './styles';
const {Navigator, Screen} = createNativeStackNavigator();

const HomeStack: React.FC = () => {
  return (
    <Navigator>
      <Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Navigator>
  );
};

export default HomeStack;
