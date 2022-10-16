import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/NotLoggedIn/Login';
import SignUp from '../screens/NotLoggedIn/SignUp';
import Home from '../screens/LoggedIn/Home';
import {UserContext} from '../context/UserContext';

const Stack = createStackNavigator();

export default function StackNavigator() {
  const {user} = useContext(UserContext);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!user ? (
          <>
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="signup" component={SignUp} />
          </>
        ) : (
          <Stack.Screen name="home" component={Home} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
