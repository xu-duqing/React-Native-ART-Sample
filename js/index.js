/**
 * Created by Guang on 16/8/8.
 */

import React from 'react'
import {
    View
} from 'react-native'

import Line from './Line';
import DashLine from './DashLine';
import Rect from './Rect'
import FillRect from './FillRect'
import Circle from './Circle';
import ArtText from './ArtText'

export default class App extends React.Component{

    render(){
        return(
            <View style={{flex: 1}}>
                <Line style={{marginTop: 40,height:10}}/>

                <DashLine style={{marginTop: 40,height:10}}/>

                <Rect />

                <FillRect style={{marginTop:10}}/>

                <Circle style={{marginTop:10}}/>

                <ArtText style={{marginTop:10}}/>

            </View>
        )
    }

}