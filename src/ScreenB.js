import React from "react"
import { View, Text, Pressable, StyleSheet } from 'react-native'

function ScreenB({navigation}) {
  const onPressHandler = () => {
    // navigation.navigate('Screen_A');
    // navigation.goBack();
    navigation.navigate('Screen_A')
  }
  return (
    <View style={styles.body}>
      <Text style={styles.text}>
        Screen B
      </Text>
      <Pressable
        style={({pressed})=>({backgroundColor: pressed ? '#ddd':'#0f0'})}
        onPress={onPressHandler}
      >
        <Text style={styles.text}>
          Go Back to Screen A
        </Text>
      </Pressable>
    </View>
  )
}


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

export default ScreenB;