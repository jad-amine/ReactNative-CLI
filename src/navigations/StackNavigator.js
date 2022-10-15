import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Text, View} from 'react-native';

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <View>
        <Text>Hello world</Text>
      </View>
    </NavigationContainer>
  );
}
