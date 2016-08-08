/**
 * Created by Guang on 16/8/8.
 */
import React from 'react'
import {
    View,
    ART
} from 'react-native'

const {Surface, Shape, Path} = ART;

export default class Rect extends React.Component{

    render(){

        const path = new Path()
            .moveTo(2,2)
            .lineTo(2,100)
            .lineTo(100,100)
            .lineTo(100,2)
            .close();

        return(
            <View style={this.props.style}>
                <Surface width={300} height={300}>
                    <Shape d={path} stroke="#000000" strokeWidth={1} />
                </Surface>
            </View>
        )
    }
}
