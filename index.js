/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Man1 from './src/Man1';
import Man2 from './src/Man2';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Test1 from './src/Test1';
import { TabScreen } from './src/Screen';
import Man3 from './src/Man3';
import Test2 from './src/Test2';




function MyTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Test2} />
        <Tab.Screen name="Settings" component={Test1} />
      </Tab.Navigator>
    );
  }

const Stack = createNativeStackNavigator();
RootComponent = function() {
        return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Man1" screenOptions={{headerShown: false}}>
                <Stack.Screen name="Man1" component={Man1} />
                <Stack.Screen name="Man2" component={Man2} />
                <Stack.Screen name="Man3" component={Man3} />
                <Stack.Screen name="Man4" component={TabScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const Tabs = createBottomTabNavigator();

AppRegistry.registerComponent(appName, () => RootComponent);
