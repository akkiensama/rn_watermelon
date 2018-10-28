import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

class Card extends Component {
    render(){
        return(
            <View style = {style.container}>
                {this.props.children}
            </View>   
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1, 
        flexDirection: 'row',
    }
})

export { Card }