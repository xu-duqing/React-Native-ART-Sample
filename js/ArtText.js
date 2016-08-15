/**
 * Created by Guang on 16/8/12.
 */

import React from 'react'
import {
    View,
    ART
} from 'react-native'

const {Surface, Text, Path} = ART;

export default class ArtText extends  React.Component{


    render(){

        return(
            <View style={this.props.style}>
                <Surface width={100} height={100}>
                    <Text strokeWidth={1} strokeDash={[2,2,2,2]} stroke="#000" font="bold 35px Heiti SC" path={new Path().moveTo(40,40).lineTo(99,10)} >Swipe</Text>
                </Surface>
            </View>
        )
    }

}
