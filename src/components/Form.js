import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { Formik } from "formik";
import * as Yup from "yup";


export default class Form extends Component {
    state = {
        shouldShowForm: false
    }
    toggleForm = () => {
        this.setState({ shouldShowForm: !this.state.shouldShowForm })
    }
    renderForm = (shouldShowForm) => {
        if (shouldShowForm) {
            return (
                <View >
                    <View style={styles.containerTextInput}>
                        <TextInput
                            ref={refs => this.textInput = refs}
                            placeholder="English"
                            style={styles.textInput} />
                        <TextInput
                            placeholder="Vietnamese"
                            style={styles.textInput} />
                    </View>
                    <View style={styles.containerTouchable}>
                        <TouchableOpacity
                            style={styles.touchableAddword}
                        >
                            <Text style={styles.textTouchable}>Add word</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={this.toggleForm}
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
                    onPress={this.toggleForm}
                    style={styles.buttonOpenForm}>
                    <Text style={styles.textOpenForm}>+</Text>
                </TouchableOpacity>
            )
        }
    }
    render() {
        return (
            <View style={{flex :1 ,justifyContent : 'flex-end' }}>
                <Formik
                    initialValues={{ vn: '', en: '', shouldShowForm: this.state.shouldShowForm }}
                    validationSchema={
                        Yup.object().shape({
                            vn: Yup
                              .string()
                              .length(5 , "Qua dai")
                              .required()
                        })
                    }
                    onSubmit={values => console.log(values)}
                >
                    {({handleChange , values , handleSubmit , errors , handleBlur}) => {
                        return (
                            <View >
                                <View style={styles.containerTextInput}>
                                    <TextInput
                                        onBlur={handleBlur('vn')}
                                        onChangeText={handleChange('vn')}
                                        value={values.vn}
                                        ref={refs => this.textInput = refs}
                                        placeholder="English"
                                        style={styles.textInput} />
                                    {errors.vn ?  <Text>{errors.vn}</Text> : null}
                                    <TextInput
                                        onBlur={handleBlur('en')}
                                        onChangeText={handleChange('ven')}
                                        value={values.en}
                                        placeholder="Vietnamese"
                                        style={styles.textInput} />
                                    {errors.en ?  <Text>{errors.en}</Text> : null}
                                </View>
                                <View style={styles.containerTouchable}>
                                    <TouchableOpacity
                                        style={styles.touchableAddword}
                                    >
                                        <Text style={styles.textTouchable}>Add word</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={handleSubmit}
                                        style={styles.touchableCancel}
                                    >
                                        <Text style={styles.textTouchable}>Cancel</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                    }}

                </Formik>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    containerTextInput: {
        width: '100%',
        height: 150,
        justifyContent: 'space-evenly'
    },
    textInput: {
        borderWidth: 1,
        height: 60,
        fontSize: 20,
        marginHorizontal: 10,
        paddingHorizontal: 10,
    },
    touchableAddword: {
        backgroundColor: '#218838',
        padding: 15,
        borderRadius: 10
    },
    textTouchable: {
        color: 'white',
        fontSize: 20,
        fontWeight: '500'
    },
    touchableCancel: {
        backgroundColor: 'red',
        padding: 15,
        borderRadius: 10
    },
    buttonOpenForm: {
        marginHorizontal: 10,
        height: 50,
        backgroundColor: '#45B157',
        borderRadius: 5,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textOpenForm: {
        color: 'white',
        fontSize: 30
    },
    containerTouchable: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 10
    },
})