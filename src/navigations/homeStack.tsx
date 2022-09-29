import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '@views/home';
import * as React from 'react';

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
