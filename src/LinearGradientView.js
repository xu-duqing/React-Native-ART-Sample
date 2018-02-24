import React from 'react';
import {
  View,
  ART, StyleSheet,UIManager
} from 'react-native';

const {Surface, Shape, Path,LinearGradient} = ART;

export default class LinearGradientView extends React.Component{

  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      container : {
        x:0,
        y:0,
        width:0,
        height:0,
        pageX:0,
        pageY:0
      }
    };
  }

  static navigationOptions = {
    title: 'Linear Gradient',
  };



  render(){

    const container = this.state.container
    const path = new Path()
    .move(0,0)
    .line(container.width,0)
    .line(container.width,container.height)
    .lineTo(0,container.height)
    .close();

    return(
      <View style={styles.container}>
        <View style={{height: 200}} onLayout={e => {
          UIManager.measure(e.target, (x, y, width, height, pageX, pageY) => {
            this.setState({
              container: {
                x,
                y,
                width,
                height,
                pageX,
                pageY
              }
            })

            console.log(this.state)
          })
        }}>

          <Surface width={this.state.container.width} height={this.state.container.height}>
            <Shape d={path} stroke="#000" fill={new LinearGradient({'0': '#E9AFCB', '1': '#FFFFCB'},"50","0","50","100")} strokeWidth={0}/>
          </Surface>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});

/**

 <Surface style={{padding:0}}>
 <Shape d={path} stroke="#000" fill={new LinearGradient({'0': '#E9AFCB', '1': '#FFFFCB'},"50","0","50","100")} strokeWidth={0}/>
 </Surface>

 **/