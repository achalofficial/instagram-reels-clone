import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Import screen components directly
import HomeScreen from '../screens/HomeScreen';
import ReelsScreen from '../screens/ReelsScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createStackNavigator();

// Define the navigation paths and headers for each screen
const navigationPaths = {
  Home: {
    name: 'Home',
    component: HomeScreen,
    options: {
      headerTitle: 'Home',
      headerStyle: { backgroundColor: '#ffffff' },
    },
  },
  Reels: {
    name: 'Reels',
    component: ReelsScreen,
    options: {
      headerTitle: 'Reels',
      headerStyle: { backgroundColor: '#000000' },
    },
  },
  Profile: {
    name: 'Profile',
    component: ProfileScreen,
    options: {
      headerTitle: 'Profile',
      headerStyle: { backgroundColor: '#f8f8f8' },
    },
  },
};

export { navigationPaths };
