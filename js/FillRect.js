/**
 * Created by Guang on 16/8/8.
 */

import React from 'react'
import {
    View,
    ART
} from 'react-native'

const {Surface, Shape, Path} = ART;

export default class FillRect extends React.Component{

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
                    <Shape d={path} stroke="#000000" fill="#892265" strokeWidth={1}/>
                </Surface>
            </View>
        )
    }
}
