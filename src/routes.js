import React from 'react';
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';
import { Platform, StyleSheet } from 'react-native';
import { colors } from '~/styles';

import Icon from 'react-native-vector-icons/FontAwesome';

import Home from '~/pages/home';
import Product from '~/pages/product';
import Cart from '~/pages/cart';

const defaultNavigationOptions = {
  headerStyle: {
    height: Platform.OS === 'ios' ? 74 : 54,
    paddingTop: Platform.OS === 'ios' ? 40 : 0,
    backgroundColor: colors.white,
    borderBottomWidth: 0,
    elevation: 0,
    shadowOpacity: 0,
  },
  headerTitleStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.secondary,
  },
  headerTintColor: colors.regular,
  headerBackTitle: null,
};

const MainStack = createStackNavigator(
  {
    Home,
    Product,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions,
    headerLayoutPreset: 'center',
  },
);

const CartStack = createStackNavigator(
  {
    Cart,
  },
  {
    initialRouteName: 'Cart',
    defaultNavigationOptions,
    headerLayoutPreset: 'center',
  },
);

export default createAppContainer(
  createBottomTabNavigator(
    {
      Main: MainStack,
      Cart: CartStack,
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === 'Main') {
            iconName = 'home';
          } else if (routeName === 'Cart') {
            iconName = 'shopping-cart';
          }

          return <Icon name={iconName} size={20} color={tintColor} />;
        },
      }),
      tabBarOptions: {
        showIcon: true,
        showLabel: false,
        activeTintColor: colors.secondary,
        inactiveTintColor: colors.gray,
        style: {
          height: Platform.OS === 'ios' ? 74 : 54,
          paddingBottom: Platform.OS === 'ios' ? 20 : 0,
          backgroundColor: colors.white,
          elevation: 0,
          shadowOpacity: 0,
          borderTopWidth: StyleSheet.hairlineWidth,
          borderColor: colors.lighter,
        },
        indicatorStyle: {
          height: 0,
        },
      },
    },
  ),
);
