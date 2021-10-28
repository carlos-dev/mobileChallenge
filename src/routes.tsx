import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { ExpenditureScreen } from './page/ExpenditureScreen';
import { StartScreen } from './page/StartScreen';

export enum AppScreens {
  Start = 'Start',
  Expenditure = 'Expenditure',
}

export type StackParamList = {
  Start: undefined;
  Expenditure: undefined;
};

const Stack = createStackNavigator<StackParamList>();

export function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={AppScreens.Start} component={StartScreen} />
        <Stack.Screen name={AppScreens.Expenditure} component={ExpenditureScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
