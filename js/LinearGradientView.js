/**
 * Created by Guang on 2016/12/5.
 */

"use strict";


import React from 'react';
import {
  View,
  ART
} from 'react-native';

const {Surface, Shape, Path,LinearGradient} = ART;

export default class LinearGradientView extends React.Component{

  render(){

    const path = new Path()
    .moveTo(1,1)
    .lineTo(1,99)
    .lineTo(99,99)
    .lineTo(99,1)
    .close();

    return(
      <View style={this.props.style}>
        <Surface width={100} height={100}>
          <Shape d={path} stroke="#000000" fill={new LinearGradient({'0': '#000000', '1': '#43ff44'},"50","0","50","100")} strokeWidth={1}/>
        </Surface>
      </View>
    )
  }
}
