import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {AnimatedTabBarNavigator} from 'react-native-animated-nav-tab-bar';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from './components/Icon';
import FeedScreen from './screens/FeedScreen';
import MapScreen from './screens/MapScreen';
import SearchScreen from './screens/SearchScreen';
import ProfileScreen from './screens/ProfileScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// const Tabs = AnimatedTabBarNavigator();
const Tabs = createBottomTabNavigator();
const TabBarIcon = (props) => {
  return (
    <Icon
      name={props.name}
      size={props.size ? props.size : 32}
      color={props.tintColor}
    />
  );
};

const TabBarCustomIcon = (props) => {
  return (
    <Icons
      name={props.name}
      color1={props.tintColor}
      color2={props.tinitColor2}
      color3={props.strokeColor}
    />
  );
};

export default () => {
  return (
    <Tabs.Navigator
      initialRouteName={'Feed'}
      backBehavior="history"
      appearance={{
        whenActiveShow: 'both',
        whenInactiveShow: 'both',
        tabButtonLayout: 'vertical',
        dotCornerRadius: 0,
        dotSize: 'small',
      }}
      tabBarOptions={{
        activeTintColor: '#8B5CFF',
        inactiveTintColor: '#949BB3',
        activeBackgroundColor: 'transparent',
        style: {paddingBottom: 10, height: 60},
      }}>
      <Tabs.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <TabBarCustomIcon
              size={24}
              focused={focused}
              tintColor={color === '#8B5CFF' ? '#8B5CFF' : '#fff'}
              tinitColor2={color === '#8B5CFF' ? '#D988FF' : '#fff'}
              strokeColor={color === '#8B5CFF' ? 'transparent' : '#949BB3'}
              name="feed"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <TabBarCustomIcon
              focused={focused}
              tintColor={color === '#8B5CFF' ? '#8B5CFF' : '#fff'}
              tinitColor2={color === '#8B5CFF' ? '#D988FF' : '#fff'}
              strokeColor={color === '#8B5CFF' ? '#fff' : '#949BB3'}
              name="map"
            />
          ),
        }}
      />

      <Tabs.Screen
        name="Explore"
        component={SearchScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <TabBarCustomIcon
              focused={focused}
              tintColor={color}
              name="explore"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <TabBarCustomIcon
              focused={focused}
              tintColor={color === '#8B5CFF' ? '#8B5CFF' : '#fff'}
              tinitColor2={color === '#8B5CFF' ? '#D988FF' : '#fff'}
              strokeColor={color === '#8B5CFF' ? 'transparent' : '#949BB3'}
              name="profile"
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};
