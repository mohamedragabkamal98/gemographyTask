import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GithubHome  from './src/screens/GithubHome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Entypo';
import metrics, { calcHeight, calcWidth } from './src/components/metrics';

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
       screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            return <Icon name={"star"} size={40} color={color} />;
          } else if (route.name === 'Settings') {
            return <Ionicons name={"settings-sharp"} size={35} color={color} />;
          }

          // You can return any component that you like here!
        },
      })}
      tabBarOptions={{
        activeTintColor: '#00B6FF',
        inactiveTintColor: 'gray',
        style:{height:calcHeight(70),paddingBottom:calcHeight(10)}

      }}
      >
        <Tab.Screen name="Home" component={GithubHome} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}