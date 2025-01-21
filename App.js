import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationPaths } from './src/navigation/Navigation'; // Import the navigation paths and screens

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {Object.keys(navigationPaths).map((key) => {
          const { component, options } = navigationPaths[key];

          return (
            <Stack.Screen
              key={key}
              name={navigationPaths[key].name}
              component={component}
              options={options}
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
