import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Exercise = () => {
  return (
    <View style={styles.body}>
      <View style={styles.header}>
        <View style={styles.view1}>
          <Text>1</Text>
        </View>
        <View style={styles.view2}>
          <Text>2</Text>
        </View>
        <View style={styles.view3}>
          <Text>3</Text>
        </View>
      </View>
      <View style={styles.body}>
      <View style={styles.view4}>
        <Text>4</Text>
      </View>
      <View style={styles.view5}>
        <Text>5</Text>
      </View>
      </View>
      
      <View style={styles.footer}>
        <View style={styles.view6}>
          <Text>6</Text>
        </View>
        <View style={styles.view7}>
          <Text>7</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
  },
  view1: {
    backgroundColor: '#00ffff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  view2: {
    backgroundColor: '#ff00ff',
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  view3: {
    backgroundColor: '#ffff00',
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  body: {
    flex: 2,
  },
  view4: {
    flex: 1,
    backgroundColor: '#ff0000',
    alignItems: 'center',
    justifyContent: 'center'
  },
  view5: {
    flex: 1,
    backgroundColor: '#00ff00',
    alignItems: 'center',
    justifyContent: 'center'
  },
  footer: {
    flex: 2,
    flexDirection: 'row'
  },
  view6: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  view7: {
    flex: 1,
    backgroundColor: '#0000ff',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Exercise