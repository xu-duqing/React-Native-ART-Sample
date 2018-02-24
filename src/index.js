import React from 'react';
import {
    View,
    Button,
    StyleSheet
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import ArtText from './ArtText';
import Circle from './Circle';
import DashLine from './DashLine';
import Fan from './Fan';
import FillRect from './FillRect';
import GroupView from './Group';
import Line from './Line';
import LinearGradientView from './LinearGradientView';
import RadialGradientView from './RadialGradientView';
import TransformView from './TransformView';

class Home extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.button}>
                    <Button
                        onPress={() => this.props.navigation.navigate('ArtText')}
                        title="绘制文本"
                        color="#841584"
                    />
                </View>

                <View style={styles.button}>
                    <Button
                        onPress={() => this.props.navigation.navigate('Circle')}
                        title="绘制圆形"
                        color="#841584"
                    />
                </View>
                <View style={styles.button}>
                    <Button
                        onPress={() => this.props.navigation.navigate('Line')}
                        title="绘制实线"
                        color="#841584"
                    />
                </View>

                <View style={styles.button}>
                    <Button
                        onPress={() => this.props.navigation.navigate('DashLine')}
                        title="绘制虚线"
                        color="#841584"
                    />
                </View>

                <View style={styles.button}>
                    <Button
                        onPress={() => this.props.navigation.navigate('Fan')}
                        title="绘制扇形"
                        color="#841584"
                    />
                </View>

                <View style={styles.button}>
                    <Button
                        onPress={() => this.props.navigation.navigate('FillRect')}
                        title="绘制矩形"
                        color="#841584"
                    />
                </View>
                <View style={styles.button}>
                    <Button
                        onPress={() => this.props.navigation.navigate('GroupView')}
                        title="绘制图层"
                        color="#841584"
                    />
                </View>
                <View style={styles.button}>
                    <Button
                        onPress={() => this.props.navigation.navigate('LinearGradientView')}
                        title="线性渐变"
                        color="#841584"
                    />
                </View>
                <View style={styles.button}>
                    <Button
                        onPress={() => this.props.navigation.navigate('RadialGradientView')}
                        title="中心渐变"
                        color="#841584"
                    />
                </View>
                <View style={styles.button}>
                    <Button
                        onPress={() => this.props.navigation.navigate('TransformView')}
                        title="绘制变换"
                        color="#841584"
                    />
                </View>

            </View>
        );
    }
}

const RootStack = StackNavigator({
    Home: {
        screen: Home,
    },
    ArtText: {
        screen: ArtText
    },
    Circle: {
        screen: Circle
    },
    DashLine: {
        screen: DashLine
    },
    Fan: {
        screen: Fan
    },
    FillRect: {
        screen: FillRect
    },
    GroupView: {
        screen: GroupView
    },
    Line: {
        screen: Line
    },
    LinearGradientView: {
        screen: LinearGradientView
    },
    RadialGradientView: {
        screen: RadialGradientView
    },
    TransformView: {
        screen: TransformView
    }
},{initialRouteName: 'Home'});

export default class App extends React.Component {
    render() {
        return <RootStack />;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20
    },
    button: {
        marginBottom: 10
    }
});