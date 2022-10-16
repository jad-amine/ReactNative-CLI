import {View, Text, Button} from 'react-native';
import React, {useContext} from 'react';
import {UserContext} from '../../context/UserContext';

const Login = () => {
  const {setUser} = useContext(UserContext);

  return (
    <View>
      <Text>Login</Text>
      <Button title="Login" onPress={() => setUser(true)} />
    </View>
  );
};

export default Login;
