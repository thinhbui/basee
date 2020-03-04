import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Home from '../screens/Home/Home';
import Notification from '../screens/Notification/Notification';
import {Image} from 'react-native';
import {Icons} from '../constants';
import User from 'src/screens/User/User';
import Trip from 'src/screens/Trip/Trip';

const TabNavigation = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({focused}) => (
          <Image source={focused ? Icons.home_selected : Icons.home} />
        ),
      },
    },
    Trip: {
      screen: Trip,
      navigationOptions: {
        tabBarIcon: ({focused}) => (
          <Image source={focused ? Icons.trip_selected : Icons.trip} />
        ),
      },
    },
    Notification: {
      screen: Notification,
      navigationOptions: {
        tabBarIcon: ({focused}) => (
          <Image
            source={focused ? Icons.notification_selected : Icons.notification}
          />
        ),
      },
    },
    User: {
      screen: User,
      navigationOptions: {
        tabBarIcon: ({focused}) => (
          <Image source={focused ? Icons.person_selected : Icons.person} />
        ),
      },
    },
  },
  {
    lazy: true,
    tabBarOptions: {
      showLabel: false,
    },
  },
);

export default TabNavigation;
