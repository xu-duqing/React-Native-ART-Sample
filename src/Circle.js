import React from 'react'
import {
  View,
  ART,
  StyleSheet
} from 'react-native'

const {Surface, Shape, Path} = ART;

export default class Circle extends React.Component{

  static navigationOptions = {
    title: 'Circle',
  };

  render(){

    const path = new Path()
    .moveTo(50,1)
    .arc(0,99,25)
    .arc(0,-99,25)
    .close();


    return(
      <View style={styles.container}>
        <Surface width={100} height={110}>
          <Shape d={path} stroke="#000000" strokeWidth={1}/>
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