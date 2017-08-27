# react native art绘图入门
在React Native中ART是个非常重要的库，它让非常酷炫的绘图及动画变成了可能。但是可能是知道的人真的不多导致文档及少中文更少。很多都是把英文的参数列表翻译过来，也没有案例。于是决定出这样一份入门文档及可能遇到的坑，希望能够帮助到大家。本文的示例工程[https://github.com/xu-duqing/React-Native-ART-Sample](https://github.com/xu-duqing/React-Native-ART-Sample)
***高级动画***：可参照[ART高级动画][1008611]
## 添加依赖
>Android默认就包含ART库，IOS需要单独添加依赖库。

1. 右键点击项目 -> ‘Add Files to ProjectName -> 选择 node_modules/react-native/React/Libraries/ART/ART.xcodeproj’
2. 将 libART.a 添加到 Linked Frameworks and Libraries

## 基础组件
ART暴露的组件有7个，这篇用到的有五个。先介绍即将用到的四个组件，之后在介绍另外三个。    

- Surface - 一个矩形可渲染的区域，是其他元素的容器！
- Group - 可容纳多个形状、文本和其他的分组
- Shape - 形状定义，可填充
- Text - 文本形状定义

## props
* Surface
    - width : 渲染区域的宽
    - height : 定义渲染区域的高
* Shape
    - d : 定义绘制路径
    - stroke : 描边颜色
    - strokeWidth : 描边宽度
    - strokeDash : 定义虚线
    - fill : 填充颜色
* Text
    - funt : 字体样式，定义字体、大小、是否加粗 如: ```bold 35px Heiti SC```
* Path
    - moveTo(x,y) : 移动到坐标（x,y）
    - lineTo(x,y) : 连线到（x,y）
    - arc() : 绘制弧线
    - close() : 封闭空间
    

## 绘制直线

>了解Path的moveTo和LineTo的使用，注意Surface的高度和宽度，多数没有绘制出想要的都是因为渲染区域定义问题

### 示例

```
import React from 'react'
import {
    View,
    ART
} from 'react-native'

export default class Line extends React.Component{

    render(){

        const path = ART.Path();
        path.moveTo(1,1); //将起始点移动到(1,1) 默认(0,0)
        path.lineTo(300,1); //连线到目标点(300,1)

        return(
            <View style={this.props.style}>
                <ART.Surface width={300} height={2}>
                    <ART.Shape d={path} stroke="#000000" strokeWidth={1} />
                </ART.Surface>
            </View>
        )
    }
}
```

## 绘制虚线
>了解strokeDash的参数，  
[10,5] : 表示绘10像素实线在绘5像素空白，如此循环  
[10,5,20,5] : 表示绘10像素实线在绘制5像素空白在绘20像素实线及5像素空白

### 示例
```

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
                    <Shape d={path} stroke="#000000" strokeWidth={2} strokeDash={[10,5]}/>
                </Surface>
            </View>
        )
    }
}
```

## 绘制矩形
>了解close()的使用，close的意思是创建一个密闭的路径。首先通过lineTo绘制三条边，在使用close链接第四条边。fill做颜色填充

### 示例
```
import React from 'react'
import {
    View,
    ART
} from 'react-native'

const {Surface, Shape, Path} = ART;

export default class Rect extends React.Component{

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
                    <Shape d={path} stroke="#000000" fill="#892265" strokeWidth={1} />
                </Surface>
            </View>
        )
    }
}
```

## 绘圆
>了解arc(x,y,radius)的使用, 终点坐标距离起点坐标的相对距离

### 示例
```
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
```

## 绘制文字
>了解funt属性的使用，规则是```bold 35px Heiti SC```   
注意： 字体应该是支持path属性的，应该是实现bug并没有不生效。 Android通过修改源码是可以解决的，IOS没看源码。

### 示例
```
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
                    <Text strokeWidth={1} stroke="#000" font="bold 35px Heiti SC" path={new Path().moveTo(40,40).lineTo(99,10)} >Swipe</Text>
                </Surface>
            </View>
        )
    }

}
```

## 绘制扇形
>这里使用的是react-art中封装的一个组件[地址](https://github.com/reactjs/react-art/blob/master/src/Wedge.art.js)，内部还是使用arc做路径绘制，感兴趣的同学可以阅读一下代码

### 示例
```
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
```

## 图层叠加
>了解Group的使用

### 示例
```
"use strict";

import React from 'react'
import {
    View,
    ART
} from 'react-native'

const {Surface, Shape,Text, Path,Group} = ART;

export default class GroupTest extends React.Component{

    render(){

        const pathRect = new Path()
            .moveTo(1,1)
            .lineTo(1,99)
            .lineTo(99,99)
            .lineTo(99,1)
            .close();

        const pathCircle = new Path()
            .moveTo(50,1)
            .arc(0,99,25)
            .arc(0,-99,25)
            .close();

        const pathText = new Path()
            .moveTo(40,5)
            .lineTo(40,99);


        return(
            <View>
                <Surface width={100} height={100}>
                    <Group>
                        <Shape d={pathRect} stroke="#000000" fill="#000000" strokeWidth={1}/>
                        <Shape d={pathCircle} stroke="#FFFFFF" fill="#FFFFFF" strokeWidth={1}/>
                        <Text strokeWidth={1} strokeDash={[2,1,2,1]} stroke="#000" font="bold 30px Heiti SC" path={pathText} >Swipe</Text>
                    </Group>
                </Surface>
            </View>
        )
    }
}
```


[1008611]:https://github.com/jiarWang/AnimBezierShape
