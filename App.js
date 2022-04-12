/**
 * Braze React Native SDK Tutorial
 */

import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AttributesScreen from './screens/AttributesScreen';
import EventsScreen from './screens/EventsScreen';
import ReactAppboy from 'react-native-appboy-sdk';
import MessagingScreen from './screens/MessagingScreen';

const Tab = createBottomTabNavigator();

const App = () => {

  useEffect(() => {
    /* TODO: Add an External ID */
    ReactAppboy.changeUser('100');
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Attributes" component={AttributesScreen} />
        <Tab.Screen name="Events" component={EventsScreen} />
        <Tab.Screen name="Content Cards" component={MessagingScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
