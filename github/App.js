import React from 'react';
import { View, Text } from 'react-native';

export default class App extends React.Component {
  render() {
      return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{ fontSize: 24 }}>Hello, world!</Text>
          </View>
      );
  }
}
