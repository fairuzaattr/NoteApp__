import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

export default function Logo() {
  return <Image source={require('../assets/attar.png')} style={styles.image} />
}

const styles = StyleSheet.create({
  image: {
    width: 60,
    height: 60,
    // color:"#3af36e",
  },
})
