import React from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {useColorScheme} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {AskMother, AskDoctor, YourBaby} from 'modules';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {hp, wp, color} from 'utils';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
import {useSelector} from 'react-redux';

const AppRoutes = () => {
  const darkMode = useSelector(state => state.themeReducer.theme);
  const scheme = useColorScheme();
  return (
    <NavigationContainer
      theme={
        darkMode === 'on'
          ? DarkTheme
          : darkMode === '' && scheme === 'dark'
          ? DarkTheme
          : DefaultTheme
      }>
      <Stack.Navigator>
        <Stack.Screen
          name="mainNavigator"
          component={MainNavigator}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;

const MainNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={'Your Baby'}
      tabBarOptions={{
        activeTintColor: color.primary,
        inactiveTintColor: color.muted,
        style: {
          height: hp(10),
          width: wp(100),
          borderTopWidth: wp(0),
          elevation: 0,
        },
        tabStyle: {
          paddingVertical: hp(1),
        },
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Ask Doctor') {
            iconName = 'stethoscope';
          } else if (route.name === 'Your Baby') {
            iconName = 'baby';
          } else if (route.name === 'Ask Mother') {
            iconName = 'comments';
          }
          return (
            <Icon
              name={iconName}
              size={wp(8)}
              color={color}
              style={{alignSelf: 'center'}}
            />
          );
        },
      })}>
      <Tab.Screen name="Ask Doctor" component={AskDoctor} />
      <Tab.Screen name="Your Baby" component={YourBaby} />
      <Tab.Screen name="Ask Mother" component={AskMother} />
    </Tab.Navigator>
  );
};
