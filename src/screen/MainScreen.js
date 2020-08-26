import React, { Component } from 'react'
import { Text, View, StyleSheet , TouchableOpacity} from 'react-native'
import Box from '../components/Box'

export default class MainScreen extends Component {

    // showVn = (word) => {
    //     if(word.isMemorized){
    //         return(
    //             <Text style={styles.textVn}>----</Text>
    //         )
    //     }else{
    //         return(
    //             <Text style={styles.textVn}>{word.vn}</Text>
    //         )
    //     }
    // }
    render() {
        const word = { id: 1, en: 'One', vn: 'Mot', isMemorized: true }
        return (
            <View style={styles.container}>
                <View style={styles.groupText}>
                    <Text
                        style={styles.textEn}>
                        {word.en}
                    </Text>
                    <Text
                        style={styles.textVn}>
                        {word.isMemorized ? "----" : word.vn}
                    </Text>
                </View>
                <View style={styles.groupButton}>
                   <TouchableOpacity
                        style={{
                            ...styles.boxMemorized,
                            backgroundColor : word.isMemorized ? '#27A745' : '#C82333'
                        }}
                   >
                       <Text 
                            style={styles.textMemorized}>
                            {word.isMemorized ? 'Forgot' : 'Memorized'}
                        </Text>
                   </TouchableOpacity>
                   <TouchableOpacity
                        style={styles.boxRemove}
                   >
                       <Text style={styles.textRemove}>Remove</Text>
                   </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor : ''
    },
    groupText: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    textEn: {
        color: 'green',
        fontSize: 20
    },
    textVn: {
        color: 'red',
        fontSize: 20
    },
    groupButton: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    textMemorized: {
        color : 'white'
    },
    textRemove: {
        color : 'black'
    },
    boxRemove: {
        padding : 10,
        backgroundColor : '#E0A800'
    },
    boxMemorized: {
        padding : 10,
    }
})