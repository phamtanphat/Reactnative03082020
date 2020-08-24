//rnc : react native component
//imrc : import react , component

import React, { Component } from 'react'
import { Text, View, StyleSheet , SafeAreaView} from 'react-native'

export default class App extends Component {
  render() {
    return (
      <SafeAreaView
        style={{
          flex : 1,
          flexDirection : 'column',
        }}>
        <View style={{flex : 1 , backgroundColor : 'green'}}>
          <View 
            style={{
              flex : 1 , 
              justifyContent : 'center', 
              alignItems : 'center',
              backgroundColor : '#f5f5f5'
            }}>
            <Text >A</Text>
          </View>
          <View 
            style={{
              flex : 1 , 
              justifyContent : 'center', 
              alignItems : 'center',
              backgroundColor : 'gray'
            }}>
            <Text >B</Text>
          </View>
          <View 
            style={{
              flex : 1 , 
              justifyContent : 'center', 
              alignItems : 'center',
              backgroundColor : 'pink'
            }}>
            <Text >C</Text>
          </View>
          <View 
            style={{
              flex : 1 , 
              justifyContent : 'center', 
              alignItems : 'center',
              backgroundColor : 'orange'
            }}>
            <Text >D</Text>
          </View>
        </View>
        <View 
          style={{
            flex : 1 ,
            backgroundColor : 'green',
            flexDirection : 'row'
          }}>
          <View 
            style={{
              flex : 1 , 
              justifyContent : 'center', 
              alignItems : 'center',
              backgroundColor : '#f5f5f5'
            }}>
            <Text >A</Text>
          </View>
          <View 
            style={{
              flex : 1 , 
              justifyContent : 'center', 
              alignItems : 'center',
              backgroundColor : 'gray'
            }}>
            <Text >B</Text>
          </View>
          <View 
            style={{
              flex : 1 , 
              justifyContent : 'center', 
              alignItems : 'center',
              backgroundColor : 'pink'
            }}>
            <Text >C</Text>
          </View>
          <View 
            style={{
              flex : 1 , 
              justifyContent : 'center', 
              alignItems : 'center',
              backgroundColor : 'orange'
            }}>
            <Text >D</Text>
          </View>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  textStyle: {
    margin: 50,
    color: 'red',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'blue',
    padding: 10,
    fontWeight: '500',
    fontStyle: 'italic',
  }
})