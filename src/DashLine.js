import React from 'react'
import {
  View,
  ART,
  StyleSheet
} from 'react-native'

const {Surface, Shape, Path} = ART;

export default class DashLine extends React.Component{

  static navigationOptions = {
    title: 'DashLine',
  };

  render(){

    const path = Path()
    .moveTo(1,1)
    .lineTo(300,1);

    return(
      <View style={styles.container}>
        <Surface width={300} height={2}>
          <Shape d={path} stroke="#000000" strokeWidth={1} strokeDash={[10,5]}/>
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