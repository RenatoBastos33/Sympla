import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FavoritesScreen from '@views/favorites';
import React from 'react';

// import { Container } from './styles';
const {Navigator, Screen} = createNativeStackNavigator();

const FavoriteStack: React.FC = () => {
  return (
    <Navigator>
      <Screen name="Favorites" component={FavoritesScreen} />
    </Navigator>
  );
};

export default FavoriteStack;
