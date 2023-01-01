import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const ScreenC = ({navigation}) => {
  const onPressHandler = () => {
    navigation.navigate('Screen_A')
  }
  return (
    <View style={styles.body}>
      <Text style={styles.text}>
        Screen C
      </Text>
      <Pressable
        style={({pressed})=>({backgroundColor: pressed ? '#ddd':'#0f0'})}
        onPress={onPressHandler}
      >
        <Text style={styles.text}>
          Go to Screen A
        </Text>
      </Pressable>
    </View>
  )
}

export default ScreenC

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10,
    color: '#000'
  }
})