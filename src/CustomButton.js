import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

const MashButton = ({onPressFunction, title, style}) => {
  return (
    <Pressable
        // onLongPress={()=>console.log("helloworld")}
        onPress={onPressFunction}
        delayLongPress={100}
        hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
        style={[styles.button,{...style}]}
        // disabled={true}
        android_ripple={{color: '#00f'}}
      >
        <Text>{
          title
        }</Text>
      </Pressable>
  )
}

const styles = StyleSheet.create({
  text: {
    color: '#000000',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10,
    // textTransform: 'capitalize',
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#00ff00',
    alignItems: 'center',
    width: 150,
    padding: 20
  },
})

export default MashButton;