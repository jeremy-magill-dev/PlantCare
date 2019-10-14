import React, {Component} from 'react'
import {
    Text,
    View
} from 'react-native'

import LotsOfGreetings from './Greeting'

export default class App extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
                <Text>Hello, World!</Text>
                <LotsOfGreetings />
            </View>
        )
    }
}