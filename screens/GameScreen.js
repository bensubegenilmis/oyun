import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Title from '../components/Title';



export default function GameScreen({userNumber}) {

  const initialGuess = generateNumber(1,100,userNumber)

  const [currentGuess, setCurrentGuess] = useState(initialGuess)


  function generateNumber(min,max,exclude)
  {
    const randomNumber = Math.floor(Math.random()*(max-min))+ min

    if(randomNumber === exclude)
    {
      return randomNumber(min,max,exclude)
    }
    else {
      return randomNumber;
    }
  }

  return (
    <View style = {styles.container}>
      <Title>Bilgisayar Tahmini</Title>
      <Text>{currentGuess}</Text>
      <View>
      <Text>Altında mı üstünde mi ?</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding: 30,
    
  },
});