import React from 'react'
import {
    Text,
    View
} from 'react-native'

class Greeting extends React.Component {
    render() {
        return (
            <View style={{alignItems: "center"}}>
                <Text>Hello {this.props.name}!</Text>
            </View>
        )
    }
}

export default class LotsOfGreetings extends React.Component {
    render() {
        return (
            <View style={{alignItems: "center", top: 50}}>
                <Greeting name='Jeremy' />
                <Greeting name='Robyn' /> 
                <Greeting name='Don' />
            </View>
        )
    }
}