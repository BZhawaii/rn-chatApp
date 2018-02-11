import React, { Component }  from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native';
import {
    Actions
} from 'react-native-router-flux';

export default class Home extends Component {
    state = {
        userName: '',
        myTest: 'helloWorld'
    };
    render() {
        return (
            <View>
                <Text style={ styles.title } >
                    Enter your name: 
                </Text>
                <TextInput
                    style={ styles.nameInput }
                    placeholder='John Smith' 
                    onChangeText={(text) => {
                        this.setState({
                            userName: text,
                        });
                    }}
                    value={this.state.userName}
                    />
                <TouchableOpacity 
                    onPress={() => {
                        Actions.chat({
                            name: this.state.userName,
                            myTest: 'WhatUp'
                        });
                    }} >
                    <Text style={ styles.buttonText } >
                        Next
                    </Text>
                </TouchableOpacity>
                
            </View>



        );
    }
}


var styles = StyleSheet.create({
    title: {
        marginTop: 20,
        marginLeft: 20,
        fontSize: 20
    },
    nameInput: {
        padding: 5,
        height: 40,
        borderWidth: 2,
        borderColor: 'black',
        margin: 20
    },
    buttonText: {
        marginLeft: 20,
        fontSize: 20
    }



});