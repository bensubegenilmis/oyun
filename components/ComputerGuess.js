import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function ComputerGuess({roundNumber, guess}) {
  return (
    <View style = {styles.listItem}>
      <Text  >{roundNumber}*</Text>
      <Text  >{guess}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    listItem:{
        flexDirection:'row',
        justifyContent:'space-between',
        borderWidth: 1,
        borderColor: 'lemonchiffon',
        marginVertical: 10,
        borderRadius: 30,
        padding:15,
        elevation: 2,
        shadowColor: 'white',
        shadowOffset: { width: 2, height: 5 },
        shadowRadius: 6,
        shadowOpacity: 0.25,


    },

});
