import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const index = () => {
  const [number, setNumber] = useState(1)

  const rollDice = () => {
    setNumber(Math.floor(Math.random() * 6) + 1)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dice Roller</Text>
      <TouchableOpacity style={styles.button} onPress={rollDice}>
        <Text style={styles.buttonText}>Roll Dice</Text>
      </TouchableOpacity>
      {<Text>{number}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#090909',
    elevation: 3,
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    padding: 20,
  },
})

export default index
