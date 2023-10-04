// componente funcional - rnfunction
import React from 'react'
import { 
    View, 
    Text,
    StyleSheet
} from 'react-native'

export default function Welcome() {
  return (
    <View style={styles.container}>
      <Text>Tela Bem-vindo</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{

    }
})