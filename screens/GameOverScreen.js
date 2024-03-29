import { StyleSheet, Text, View , Image} from 'react-native';
import React from 'react';
import Title from '../components/Title';
import CustomButton from '../components/CustomButton';


export default function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {
  return (
    <View style={styles.container}>
      <Title>Congratulations!</Title>
      <View style={styles.imageview}>
        <Image style={styles.image} source = {require('../assets/gameover.png')} />
      </View>
      <Text style={styles.result}>
        <Text style={styles.countAndNumber}> {roundsNumber} </Text>denemeyle
        <Text style={styles.countAndNumber}> {userNumber} </Text>sayısını buldun..
      </Text>
      <CustomButton onPress={onStartNewGame}>Yeni Oyuna Başla</CustomButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    alignItems:'center',
    justifyContent:'center',

  },
  image:{
    borderRadius:30,
  
  },
  imageview:{
    margin:30,
  },
  result:{
    fontSize:20,
    textAlign:'center',
    marginBottom: 20,

  },
  countAndNumber:{
    color: 'yellow',

  },
 
});