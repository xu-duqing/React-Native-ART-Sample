/**
 * Created by Guang on 16/8/12.
 */

"use strict";

import React from 'react'
import {
    View,
    ART
} from  'react-native'

const {Surface, Shape, Path,Group} = ART;

export default class Fan extends  React.Component{

    render(){

        const path = new Path()
            .moveTo(50,50)
            .lineTo(50,0)
            .arc(80, 90)
            .close();


        const path1 = new Path()
            .moveTo(50,1)
            .arc(0,99,25)
            .arc(0,-99,25)
            .close();


        return(
            <View style={this.props.style}>
                <Surface width={100} height={100}>
                    <Group>
                        <Shape d={path} stroke="#000" strokeWidth={2}/>
                        <Shape d={path1} stroke="#000000" strokeWidth={1}/>
                    </Group>
                </Surface>
            </View>
        )
    }
}
