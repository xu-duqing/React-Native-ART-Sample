import React from 'react'
import {
  View,
  ART,
  StyleSheet
} from 'react-native'

const {Surface, Shape, Path} = ART;

export default class FillRect extends React.Component{

  static navigationOptions = {
    title: 'FillRect',
  };

  render(){

    const path = new Path()
    .moveTo(1,1)
    .lineTo(1,99)
    .lineTo(99,99)
    .lineTo(99,1)
    .close();

    return(
      <View style={styles.container}>
        <Surface width={100} height={100}>
          <Shape d={path} stroke="#000000" fill="#892265" strokeWidth={1}/>
        </Surface>
      </View>
    )
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