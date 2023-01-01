import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View 
      style={styles.view}
    >
      <Text
        style={styles.text}
      >
        React Native Tutorial
      </Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  view: {
    height: 50,
    backgroundColor: '#00f',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 25,
    color: '#fff'
  }
})