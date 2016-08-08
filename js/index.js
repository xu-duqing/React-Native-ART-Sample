/**
 * Created by Guang on 16/8/8.
 */

import React from 'react'
import {
    View
} from 'react-native'

import Line from './Line';

export default class App extends React.Component{

    render(){
        return(
            <View style={{flex: 1}}>
                <Line style={{marginTop: 40,height:50}}/>
            </View>
        )
    }

}