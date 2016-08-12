/**
 * Created by Guang on 16/8/8.
 */

import React from 'react'
import {
    View,
    ART
} from 'react-native'

const {Surface, Shape, Path} = ART;

export default class Circle extends React.Component{

    render(){

        const path = new Path()
            .moveTo(50,1)
            .arc(0,99,25)
            .arc(0,-99,25)
            .close();


        return(
            <View style={this.props.style}>
                <Surface width={100} height={100}>
                    <Shape d={path} stroke="#000000" strokeWidth={1}/>
                </Surface>
            </View>
        )
    }
}