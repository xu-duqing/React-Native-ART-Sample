import React from 'react'
import {
  View,
  ART,
  StyleSheet
} from  'react-native'

const {Surface} = ART;
import Wedge from './Wedge'

export default class Fan extends  React.Component{

  static navigationOptions = {
    title: 'Fan',
  };

  render(){

    return(
      <View style={styles.container}>
        <Surface width={100} height={100}>
          <Wedge
            outerRadius={50}
            startAngle={0}
            endAngle={60}
            originX={50}
            originY={50}
            fill="blue"/>

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