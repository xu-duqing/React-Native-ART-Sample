import React from 'react';
import { StyleSheet, View } from 'react-native';

import ArtText from './ArtText'

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ArtText/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
