/**
 * Created by Guang on 16/8/12.
 */

"use strict";

import React from 'react'
import {
    View,
    ART
} from  'react-native'

const {Surface} = ART;
import Wedge from './Wedge'

export default class Fan extends  React.Component{

    render(){

        return(
            <View style={this.props.style}>
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
