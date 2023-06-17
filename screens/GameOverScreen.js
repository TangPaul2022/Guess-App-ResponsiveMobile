import { Image, StyleSheet, Text, View, useWindowDimensions, ScrollView } from 'react-native'
import React from 'react'
import Title from '../components/ui/Title'
import Colors from '../constants/colors'
import PrimaryButton from '../components/ui/PrimaryButton'

const GameOverScreen = ({roundsNumber, userNumber, OnStartNewGame}) => {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;

  if (width < 360) {
    imageSize = 150
  }

  
  if (height < 400) {
    imageSize = 150
  }
  

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2
  }

  return (
    <ScrollView style={styles.screen} >
    <View style={styles.routeContainer} >
      <Title>GAME OVER</Title>
      <View style={[styles.imageContainer, imageStyle]}>
         <Image 
           style={styles.image} 
          source={require('../assets/images/success4.jpg')} 
        />
      </View>
      <Text style={styles.smText} >
        You needed  
        <Text style={styles.highlight}>
          {roundsNumber} 
        </Text> 
          rounds to guess the number  
        <Text style={styles.highlight}>
           {userNumber} 
        </Text>
      </Text>
      <PrimaryButton onPressbtn={OnStartNewGame}>Start A New Game</PrimaryButton>
    </View>
    </ScrollView>
  )
}

export default GameOverScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  routeContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    margin: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%'
  },
  smText: {
    fontFamily: 'gen-bb-regular',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 15
  },
  highlight: {
    fontFamily: 'gen-bb-bold',
    color: Colors.primary500 ,
    margin: 5,
    padding: 5,
    
  },
})