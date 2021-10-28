import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { StartScreen } from './page/StartScreen';
import { ExpenditureScreen } from './page/ExpenditureScreen';
import { CreateExpenseScreen } from './page/CreateExpenseScreen';

export enum AppScreens {
  Start = 'Start',
  Expenditure = 'Expenditure',
  CreateExpense = 'CreateExpense',
}

export type StackParamList = {
  Start: undefined;
  Expenditure: undefined;
  CreateExpense: undefined;
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
        <Stack.Screen name={AppScreens.CreateExpense} component={CreateExpenseScreen} />
        <Stack.Screen name={AppScreens.Start} component={StartScreen} />
        <Stack.Screen name={AppScreens.Expenditure} component={ExpenditureScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
