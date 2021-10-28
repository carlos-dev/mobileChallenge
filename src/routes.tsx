import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ExpenditureScreen } from './page/ExpenditureScreen';

const Stack = createStackNavigator();

export function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Expenditure" component={ExpenditureScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
