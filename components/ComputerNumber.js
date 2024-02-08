import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function ComputerNumber({children}) {
  return (
    <View style = {styles.container}>
      <Text>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        borderWidth: 4,
        borderColor: 'yellow',
        padding: 25,
    },
});