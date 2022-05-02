import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

const QuantitySelector = () =>{
    const onMinus = () => {
         
    }

    const onPlus = () => {

    }

  return (
    <View style={styles.container}>
      <Pressable onPress={onMinus} style={styles.pressable}>
          <Text style={styles.pressableText}>-</Text>
      </Pressable>

      <Text style={styles.quantity}>0</Text>

      <Pressable onPress={onPlus} style={styles.pressable}>
          <Text style={styles.pressableText}>+</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        borderWidth: 1,
        borderColor: '#d1d1d1',
        width: 130,
    },
    pressable:{
        height: 35,
        width: 35,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: '#c2c2c2'
    },
    pressableText:{

    },
    quantity:{
        color:'#007eb9'

    }
})

export default QuantitySelector;