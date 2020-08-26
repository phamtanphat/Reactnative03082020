import React, { Component } from 'react'
import { Text, View , StyleSheet} from 'react-native'
import Box from '../components/Box'

export default class MainScreen extends Component {

    showVn = (word) => {
        if(word.isMemorized){
            return(
                <Text style={styles.textVn}>----</Text>
            )
        }else{
            return(
                <Text style={styles.textVn}>{word.vn}</Text>
            )
        }
    }
    render() {
        const word = {id : 1 , en : 'One' , vn : 'Mot' , isMemorized : true}
        return (
            <View style={styles.container}>
                <View style={styles.groupText}>
                    <Text style={styles.textEn}>{word.en}</Text>
                    {this.showVn(word)}
                </View>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container : {
        flex : 1
    },
    groupText : {
        flexDirection : 'row',
        justifyContent : 'space-evenly'
    },
    textEn : {
        color : 'green',
        fontSize : 20
    },
    textVn : {
        color : 'red',
        fontSize : 20
    }
})