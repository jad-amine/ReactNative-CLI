import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text, View} from 'react-native';

const HomeStack = createNativeStackNavigator();

function Contacts() {
  return (
    <View>
      <Text>Hello from Contacts</Text>
    </View>
  );
}

function ContactDetail() {
  return (
    <View>
      <Text>ContactDetail</Text>
    </View>
  );
}

function CreateContact() {
  return (
    <View>
      <Text>CreateContact</Text>
    </View>
  );
}

function Settings() {
  return (
    <View>
      <Text>Settings</Text>
    </View>
  );
}

export default function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Contacts" component={Contacts} />
      <HomeStack.Screen name="Contact Detail" component={ContactDetail} />
      <HomeStack.Screen name="Create Contact" component={CreateContact} />
      <HomeStack.Screen name="Settings" component={Settings} />
    </HomeStack.Navigator>
  );
}
