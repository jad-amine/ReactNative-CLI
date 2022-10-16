import React from 'react';
import StackNavigator from './src/navigations/StackNavigator';
import 'react-native-gesture-handler';
import {UserContextProvider} from './src/context/UserContext';

const App = () => {
  return (
    <UserContextProvider>
      <StackNavigator />
    </UserContextProvider>
  );
};

export default App;
