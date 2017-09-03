import React from 'react';
import { View, Text } from 'react-native';
import Logo from "./src/screen/Logo";

export default class App extends React.Component {
  render() {
      return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Logo />
          </View>
      );
  }
}
