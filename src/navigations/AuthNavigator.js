import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text, View} from 'react-native';

const AuthStack = createNativeStackNavigator();

function Login() {
  return (
    <View>
      <Text>Hello from Login</Text>
    </View>
  );
}

function SignUp() {
  return (
    <View>
      <Text>SignUp</Text>
    </View>
  );
}

export default function AuthNavigator() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Register" component={SignUp} />
    </AuthStack.Navigator>
  );
}
