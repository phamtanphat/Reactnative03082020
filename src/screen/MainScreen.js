import React, { Component } from 'react'
import { Text, View , StyleSheet} from 'react-native'
import Box from '../components/Box'

export default class MainScreen extends Component {
    render() {
        const word = {id : 1 , en : 'One' , vn : 'Mot'}
        return (
            <View style={styles.container}>
                <View style={styles.groupText}>
                    <Text>{word.en}</Text>
                    <Text>{word.vn}</Text>
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
    }
})