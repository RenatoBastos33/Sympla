import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  DefaultTheme,
  NavigationContainer,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  Theme,
} from '@react-navigation/native';
import * as React from 'react';
import ExploreStack from './exploreStack';
import FavoriteStack from './favoritesStack';
import HomeStack from './homeStack';
import ProfileStack from './profileStack';
import TicketStack from './ticketsStack';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {heightPixel} from '../utils/normalize';

const {Navigator, Screen} = createBottomTabNavigator();

const MyTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

const RootStack = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {height: heightPixel(65)},
        }}>
        <Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            title: 'Home',
            tabBarIcon: ({color, size}) => (
              <MaterialIcon name="home-outline" color={color} size={size} />
            ),
          }}
        />
        <Screen
          name="ExploreStack"
          component={ExploreStack}
          options={{
            title: 'Explore',
            tabBarIcon: ({color, size}) => (
              <MaterialIcon name="compass-outline" color={color} size={size} />
            ),
          }}
        />
        <Screen
          name="TicketStack"
          component={TicketStack}
          options={{
            title: 'Ticket',
            tabBarIcon: ({color, size}) => (
              <MaterialIcon
                name="ticket-confirmation-outline"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Screen
          name="FavoriteStack"
          component={FavoriteStack}
          options={{
            title: 'Favorites',
            tabBarIcon: ({color, size}) => (
              <MaterialIcon name="heart-outline" color={color} size={size} />
            ),
          }}
        />
        <Screen
          name="ProfileStack"
          component={ProfileStack}
          options={{
            title: 'Profile',
            tabBarIcon: ({color, size}) => (
              <MaterialIcon name="account-outline" color={color} size={size} />
            ),
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
