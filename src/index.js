import React from 'react';
import {
  View,
  Button,
  StyleSheet
} from 'react-native'

import { StackNavigator } from 'react-navigation';

import ArtText from './ArtText'
import Circle from './Circle'


class Home extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => this.props.navigation.navigate('ArtText')}
          title="绘制文本"
          color="#841584"
        />

        <Button
          onPress={() => this.props.navigation.navigate('Circle')}
          title="绘制园"
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
  },
  Circle: {
    screen: Circle
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
  }
});