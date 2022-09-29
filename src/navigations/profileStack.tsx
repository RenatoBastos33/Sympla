import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from '@views/profile';
import React from 'react';

// import { Container } from './styles';
const {Navigator, Screen} = createNativeStackNavigator();

const ProfileStack: React.FC = () => {
  return (
    <Navigator>
      <Screen name="Profile" component={ProfileScreen} />
    </Navigator>
  );
};

export default ProfileStack;
