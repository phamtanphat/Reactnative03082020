import React, { Component } from 'react'
import { Text, View, StyleSheet , TouchableOpacity} from 'react-native'
import Box from '../components/Box'
import Dimensions from '../ultils/Dimensions'

export default class MainScreen extends Component {
    render() {
        const word = { id: 1, en: 'One', vn: 'Mot', isMemorized: true }
        return (
            <View style={styles.wordgroup} >
                <View style={styles.textgroup}>
                    <Text style={styles.textEn}>{word.en}</Text>
                    <Text style={styles.textVn}> 
                        {word.isMemorized ? '----' : word.vn}
                    </Text>
                </View>
                <View style={styles.textgroup}>
                    <TouchableOpacity
                        style={word.isMemorized ? styles.buttonisForgot : styles.buttonisMemorized}
                    >
                        <Text 
                            style={styles.textisMemorized}>
                            {word.isMemorized ? "Forgot" : "isMemorized"}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonRemove}
                    >
                        <Text style={styles.textRemove}>Remove</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    wordgroup: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        backgroundColor: '#F0F0F0',
        borderRadius : 5,
        paddingVertical : 5
    },
    textgroup: {
        flexDirection : 'row',
        justifyContent: 'space-evenly',
        marginBottom: 10
    },
    buttonisMemorized : {
        padding : 10,
        backgroundColor : 'red',
        borderRadius : 5
    },
    buttonisForgot: {
        padding : 10,
        backgroundColor : '#218838',
        borderRadius : 5
    },
    buttonRemove: {
        padding : 10,
        backgroundColor : '#E0A800',
        borderRadius : 5
    },
    textisMemorized: {
        fontSize : 20,
        color : 'white'
    },
    textRemove: {
        fontSize : 20,
        color : 'white'
    },
    textEn: {
        color : '#45B157',
        fontSize : Dimensions.getWidth() / 15,
        fontWeight: '500'
    },
    textVn: {
        color : '#DA2846',
        fontSize : Dimensions.getWidth()  / 15,
        fontWeight: '500'
    },
})