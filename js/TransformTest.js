/**
 * Created by Guang on 16/8/18.
 */

import React from 'react'
import {
    View,
    ART,
} from 'react-native'

const {Surface,Transform,Shape,Path} = ART;
import Wedge from './Wedge'


export default class TransformTest extends React.Component{

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
          rotation : 0
        };
    }

    componentDidMount() {
        this.timer = setInterval(() =>{
            this.setState({rotation: this.state.rotation>360?0 :this.state.rotation + 10});
        },2)
    }

    componentWillUnMount() {
        this.timer && clearInterval(this.timer);
    }

    render(){
        const path = new Path()
            .moveTo(1,1)
            .lineTo(1,99)
            .lineTo(99,99)
            .lineTo(99,1)
            .close();

        var RING_TWO_ROTATE = new Transform().translate(84.000000, 89.000000).rotate(-240.000000).translate(-84.000000, -89.000000);

        return(
            <View style={this.props.style}>
                <Surface width={300} height={300}>
                    <Shape d={path} fill="#000" strokeWidth={1} transform={RING_TWO_ROTATE} rotation={this.state.rotation} originX={84} originY={89}/>
                </Surface>
            </View>
        )
    }
}
