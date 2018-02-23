import React from 'react';
import {
  View,
  Button,
  StyleSheet
} from 'react-native'

import { StackNavigator } from 'react-navigation';

import ArtText from './ArtText'
import Circle from './Circle'
import DashLine from './DashLine'
import Fan from './Fan'
import FillRect from './FillRect'

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

        <Button
          onPress={() => this.props.navigation.navigate('DashLine')}
          title="绘制虚线"
          color="#841584"
        />

        <Button
          onPress={() => this.props.navigation.navigate('Fan')}
          title="绘制扇形"
          color="#841584"
        />

        <Button
          onPress={() => this.props.navigation.navigate('FillRect')}
          title="绘制矩形"
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
  },
  DashLine: {
    screen: DashLine
  },
  Fan: {
    screen: Fan
  },
  FillRect: {
    screen: FillRect
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