import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';

class Button extends Component {
    render(){
        return(
            <TouchableOpacity onPress = { this.props.onPress } style = {style.button}>
                <Text style = {style.buttonText}>{ this.props.children }</Text>
            </TouchableOpacity>    
        );
    }
}

const style = StyleSheet.create({
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#c8d6e5',
        borderWidth: 1,
        borderColor: '#576574',
        margin: 1
    },
    buttonText: {
        color: '#000',
        fontSize: 25,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
})

export { Button }