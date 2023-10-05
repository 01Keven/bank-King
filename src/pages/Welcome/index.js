// componente funcional - rnfunction
import React from 'react'
import { 
    View, 
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native'

export default function Welcome() {
  return (
    <View style={styles.container}>
      
      <View>
        <Image // Logo pequena/branca
          source={require('../../assets/LogoPequena.png')}
          style={{ width: '100%' }}
          resizeMode='contain'
        />  
      </View>
    
    </View>
  )
}

const styles = StyleSheet.create({
    container:{

    }
})