import { View, Text, StyleSheet, SectionList, Alert, RefreshControl } from 'react-native'
import React, { useState } from 'react'

const Exercise2 = () => {
  const [refreshing, setRefreshing] = useState(false)
  const [data, setData] = useState([
    {
      title: 'Title 1',
      data: [
        'Item 1-1',
        'Item 1-2'
      ]
    },
  ])
  const addData = () => {
    const len = data.length;
    const newObj = {
      title: `Title ${len + 1}`,
      data: [
        `Item ${len + 1}-1`,
        `Item ${len + 1}-2`
      ]
    }
    setData([...data, newObj])
  }
  return (
    <View style={styles.body}>
      <SectionList 
        sections={data}
        renderItem={({item})=>(
          <Text style={styles.text}>{item}</Text>
        )}
        renderSectionHeader={({section})=>(
          <View style={styles.item}>
            <Text style={styles.text}>{section.title}</Text>
          </View>
        )}
        refreshControl={
          <RefreshControl 
            refreshing={refreshing}
            onRefresh={()=>addData()}
          />
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },
  item: {
    margin: 10,
    backgroundColor: '#4ae1fa',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  text: {
    color: '#000000',
    fontSize: 45,
    fontStyle: 'italic',
    margin: 10,
    textTransform: 'capitalize'
  }
})

export default Exercise2