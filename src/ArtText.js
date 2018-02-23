import React from 'react'
import {
  View,
  ART,
  StyleSheet
} from 'react-native'

const {Surface, Text, Path} = ART;

export default class ArtText extends  React.Component{

  static navigationOptions = {
    title: 'ArtText',
  };

  render(){

    return(
      <View style={styles.container}>
        <Surface width={100} height={100}>
          <Text strokeWidth={1} strokeDash={[2,2,2,2]} stroke="#000" font="bold 35px Heiti SC" path={new Path().moveTo(40,40).lineTo(99,10)} >Swipe</Text>
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