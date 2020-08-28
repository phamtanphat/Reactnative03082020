import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, FlatList , TextInput} from 'react-native'
import Box from '../components/Box'
import dimensions from '../utils/dimensions'

export default class MainScreen extends Component {
    state = {
        words: [
            { id: 1, en: 'One', vn: 'Mot', isMemorized: true },
            { id: 2, en: 'Two', vn: 'Hai', isMemorized: false },
            { id: 3, en: 'Three', vn: 'Ba', isMemorized: false },
            { id: 4, en: 'Four', vn: 'Bon', isMemorized: true },
        ],
        shouldShowForm : true
    }
    toggleWord = (id) => {
        const newWords = this.state.words.map(item => {
            if (item.id == id) {
                return { ...item, isMemorized: !item.isMemorized }
            }
            return item
        })
        this.setState({ words: newWords })
    }
    removeWord = (id) => {
        const newWords = this.state.words.filter(item => {
            if (item.id == id) {
                return false
            }
            return true
        })
        this.setState({ words: newWords })
    }
    renderForm = (shouldShowForm) => {
        if (shouldShowForm){
            return (
                <View >
                    <View style={styles.containerTextInput}>
                    <TextInput 
                        placeholder="English"
                        style={styles.textInput}/>
                    <TextInput 
                        placeholder="Vietnamese"
                        style={styles.textInput}/>
                    </View>
                    <View style={styles.containerTouchable}>
                        <TouchableOpacity
                            style={styles.touchableAddword}
                        >
                            <Text style={styles.textTouchable}>Add word</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.touchableCancel}
                        >
                            <Text style={styles.textTouchable}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
            );
        } else {
            return (
                <TouchableOpacity
                    style={styles.buttonOpenForm}>
                    <Text style={styles.textOpenForm}>+</Text>
                </TouchableOpacity>
            )
        }
    }
    render() {
        return (
            <View style={styles.container}>
                {this.renderForm(this.state.shouldShowForm)}
                <FlatList
                    data={this.state.words}
                    extraData={this.state.words}
                    keyExtractor={(item, index) => item.id.toString()}
                    renderItem={({ item }) => {
                        return (
                            <View
                                key={item.id}
                                style={styles.wordgroup} >
                                <View style={styles.textgroup}>
                                    <Text style={styles.textEn}>{item.en}</Text>
                                    <Text style={styles.textVn}>
                                        {item.isMemorized ? '----' : item.vn}
                                    </Text>
                                </View>
                                <View style={styles.textgroup}>
                                    <TouchableOpacity
                                        onPress={() => this.toggleWord(item.id)}
                                        style={item.isMemorized ? styles.buttonisForgot : styles.buttonisMemorized}
                                    >
                                        <Text
                                            style={styles.textisMemorized}>
                                            {item.isMemorized ? "Forgot" : "isMemorized"}
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => this.removeWord(item.id)}
                                        style={styles.buttonRemove}
                                    >
                                        <Text style={styles.textRemove}>Remove</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                    }}
                    ItemSeparatorComponent={() => {
                        return(
                            <View style={{height : 10}}/>
                        )
                    }}
                />
            </View >
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex : 1
    },
    containerTextInput: {
        width : '100%',
        height: 150,
        justifyContent : 'space-evenly'
    },
    textInput : {
        borderWidth : 1,
        height: 60,
        fontSize : 20,
        marginHorizontal : 10,
        paddingHorizontal: 10,
    },
    touchableAddword : {
        backgroundColor : '#218838',
        padding : 15,
        borderRadius : 10
    },
    textTouchable: {
        color : 'white',
        fontSize : 20,
        fontWeight : '500'
    },
    touchableCancel: {
        backgroundColor : 'red',
        padding : 15,
        borderRadius : 10
    },
    buttonOpenForm: {
        width : '100%',
        height : 50,
        backgroundColor : '#45B157',
        borderRadius : 5,
        marginBottom : 10,
        justifyContent : 'center',
        alignItems : 'center'
    },
    textOpenForm: {
        color : 'white',
        fontSize : 30
    },
    containerTouchable: {
        flexDirection : 'row',
        justifyContent : 'space-evenly',
        marginBottom : 10
    },
    wordgroup: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        backgroundColor: '#F0F0F0',
        borderRadius: 5,
        paddingVertical: 5,
        marginHorizontal: 10
    },
    textgroup: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 10
    },
    buttonisMemorized: {
        padding: 10,
        backgroundColor: 'red',
        borderRadius: 5
    },
    buttonisForgot: {
        padding: 10,
        backgroundColor: '#218838',
        borderRadius: 5
    },
    buttonRemove: {
        padding: 10,
        backgroundColor: '#E0A800',
        borderRadius: 5
    },
    textisMemorized: {
        fontSize: 20,
        color: 'white'
    },
    textRemove: {
        fontSize: 20,
        color: 'white'
    },
    textEn: {
        color: '#45B157',
        fontSize: dimensions.getWidth() / 15,
        fontWeight: '500'
    },
    textVn: {
        color: '#DA2846',
        fontSize: dimensions.getWidth() / 15,
        fontWeight: '500'
    },
})