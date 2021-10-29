import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { StartScreen } from './pages/StartScreen';
import { ExpensesScreen } from './pages/ExpensesScreen';
import { CreateExpenseScreen } from './pages/CreateExpenseScreen';
import { EditExpenseScreen } from './pages/EditExpenseScreen';

export enum AppScreens {
  Start = 'Start',
  Expenses = 'Expenses',
  CreateExpense = 'CreateExpense',
  EditExpense = 'EditExpense',
}

export type StackParamList = {
  Start: undefined;
  Expenses: undefined;
  CreateExpense: undefined;
  EditExpense: undefined;
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
        <Stack.Screen name={AppScreens.Expenses} component={ExpensesScreen} />
        <Stack.Screen name={AppScreens.EditExpense} component={EditExpenseScreen} />
        <Stack.Screen name={AppScreens.CreateExpense} component={CreateExpenseScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
