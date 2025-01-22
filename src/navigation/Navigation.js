import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import ReelsScreen from '../screens/ReelsScreen';
import ProfileScreen from '../screens/ProfileScreen';

const navigationPaths = {
  Home: {
    component: HomeScreen,
    header: {
      title: 'Home',
      backgroundColor: '#ffffff',
    },
  },
  Reels: {
    component: ReelsScreen,
    header: {
      title: 'Reels',
      backgroundColor: '#000000',
    },
  },
  Profile: {
    component: ProfileScreen,
    header: {
      title: 'Profile',
      backgroundColor: '#f8f8f8',
    },
  },
};

// Create BottomTab navigator
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: '#000', borderTopWidth: 0 },
        tabBarActiveTintColor: '#fff',
      }}
    >
      <Tab.Screen
        name="Home"
        component={navigationPaths.Home?.component}
        options={{
          tabBarLabel: 'Home',
          headerShown:false,
        }}
      />
      <Tab.Screen
        name="Reels"
        component={navigationPaths.Reels?.component}
        options={{
          tabBarLabel: 'Reels',
          headerTitle: navigationPaths.Reels?.header?.title || 'Reels',
          headerStyle: {
            backgroundColor: navigationPaths.Reels?.header?.backgroundColor || '#000000',
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={navigationPaths.Profile?.component}
        options={{
          tabBarLabel: 'Profile',
          headerTitle: navigationPaths.Profile?.header?.title || 'Profile',
          headerStyle: {
            backgroundColor: navigationPaths.Profile?.header?.backgroundColor || '#f8f8f8',
          },
        }}
      />
    </Tab.Navigator>
  );
};

export { navigationPaths, BottomTabNavigator };
