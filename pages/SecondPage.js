//This is an example code for Navigator// 
import React, { Component } from 'react';
//import react in our code. 
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
//import all the components we are going to use.

export default class SecondPage extends Component {
    static navigationOptions = {
        title: 'Second Page',
        //Sets Header text of Status Bar
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() =>navigate('Scan')}>
                    <View style={styles.item_container}>
                        <Image style={styles.item_img} source={require('./../src/img/camera.png')} />
                        <View style={styles.item_text_container}>
                            <Text>Scan Buah Kamu!</Text>
                            <Text>Coba scan buah kamu, udah matang{"\n"}belum?</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    item_container: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'red',
        alignSelf: 'stretch',
        margin: 10
    },
    item_img: {
        width: 80,
        height: 80
    },
    item_text_container: {
        flexDirection: 'column',
        borderWidth: 1,
        borderColor: 'green',
        alignSelf: 'stretch',
        padding: 10
    }
});