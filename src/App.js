import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import ForgetPassword from './screens/ForgetPassword';
import UploadPhoto from './screens/UploadPhoto';
import ChooseGender from './screens/ChooseGender';
import CommentScreen from './screens/CommentScreen';
import FullWidthScreen from './screens/FullWidthScreen';
import BottomBar from './BottomBar';
import CompitionView from './screens/CompitionView';
import CreateCompetition from './screens/CreateCompetition';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MenuScreen">
        <Stack.Screen
          options={{headerShown: false}}
          name="WelcomeScreen"
          component={WelcomeScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="LoginScreen"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="SignupScreen"
          component={SignupScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="ForgetPassword"
          component={ForgetPassword}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="UploadPhoto"
          component={UploadPhoto}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="ChooseGender"
          component={ChooseGender}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="BottomBar"
          component={BottomBar}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="CommentScreen"
          component={CommentScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="FullWidthScreen"
          component={FullWidthScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="CompitionView"
          component={CompitionView}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="CreateCompetition"
          component={CreateCompetition}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
