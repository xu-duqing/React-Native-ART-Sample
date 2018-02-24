import React from 'react'
import {
  View,
  ART,
  StyleSheet
} from 'react-native'

const {Surface, Text, Path, LinearGradient} = ART;

export default class ArtText extends  React.Component{

  static navigationOptions = {
    title: 'ArtText',
  };

  render(){

    return(
      <View style={styles.container}>
        <Surface width={150} height={50}>
          <Text strokeWidth={1} strokeDash={[2,2,2,2]} stroke="#000" font="bold 35px Heiti SC" path={new Path().moveTo(40,40).lineTo(99,10)} >虚线文字</Text>
        </Surface>

        <Surface width={150} height={50}>
          <Text strokeWidth={0} fill={new LinearGradient({'0': '#FF4444', '1': '#FFF2DE'},"0","0","100","40")} font="bold 35px Heiti SC" path={new Path().moveTo(40,40).lineTo(99,10)} >渐变文字</Text>
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