# react native art绘图入门
在React Native中ART是个非常重要的库，它让非常酷炫的绘图及动画变成了可能了。但是可能是知道的人真的不多导致文档及少中文更少。很多都是把英文的参数列表翻译过来，也没有案例。于是决定出这样一份入门文档及可能遇到的坑，希望能够帮助到大家

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

## 绘制直线
1. 导出ART包 ```import { ART } from 'react-native'```
2. 定义路径 ```const path = new Path()```
3. 绘制路径 

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

## 绘制矩形

## 绘圆

## 绘制文字

## 图层叠加