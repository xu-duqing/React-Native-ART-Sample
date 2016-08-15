/**
 * Created by Guang on 16/8/8.
 */

import React from 'react'
import {
    View,
    ART
} from 'react-native'

const {Surface, Shape, Path} = ART;

export default class DashLine extends React.Component{

    render(){

        const path = Path()
            .moveTo(1,1)
            .lineTo(300,1);

        return(
            <View style={this.props.style}>
                <Surface width={300} height={2}>
                    <Shape d={path} stroke="#000000" strokeWidth={2} strokeDash={[1,5,1,5]}/>
                </Surface>
            </View>
        )
    }
}
