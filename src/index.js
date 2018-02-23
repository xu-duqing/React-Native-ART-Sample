import React from 'react';
import {
  View,
  Button,
  StyleSheet
} from 'react-native'

import ArtText from './ArtText'
import { StackNavigator } from 'react-navigation';

class Home extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Button
          style={styles.button}
          onPress={() => this.props.navigation.navigate('ArtText')}
          title="绘制文本"
          color="#841584"
        />
      </View>
    )
  }
}

const RootStack = StackNavigator({
  Home: {
    screen: Home,
  },
  ArtText: {
    screen: ArtText
  }
});

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  button: {
    flex: 1
  }
});