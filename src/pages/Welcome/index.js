// componente funcional - rnfunction
import React from 'react'
import { 
    View, 
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ImageBackground,
    FontVariant
} from 'react-native'

import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

const index = () => {
  let [fontLoaded] = useFonts({
    
  })

  if (!fontLoaded) {
    return <AppLoading/>
  }
} 

export default function Welcome() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/BackgroundInicio.png')} style={styles.imageBackground}>
      <Image source={require('../../assets/LogoPequena.png')} style={styles.imageForeground}/>
      <Text style={styles.title}>Bem Vindo</Text>
    </ImageBackground>

      <View style={styles.containerForm}>
        <Text style={styles.text}>Comece a jornada rumo ao seu sucesso financeiro com o bankKing.</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Iniciar</Text>
        </TouchableOpacity>

      </View>

      
    
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
      flex: 1,


      //backgroundColor: "#555555"
    },
    imageBackground:{
      flex: 2,
      width: 'auto',
      height: 620,
      resizeMode: 'cover',
      justifyContent: 'center',
      alignItems: 'center'
      
    },
    imageForeground:{
      width: 94,
      height: 55.49,
      
      
    },
    containerForm:{
      flex: 1,
      backgroundColor: '#fff',
      borderTopRightRadius: 25,
      borderTopLeftRadius: 25,
      paddingStart: '9%',
      paddingEnd: '9%',
      alignItems: 'center'

    },
    title:{
      color: 'white',
      fontSize: 56,
      fontWeight: '700',
      marginTop: 300,
      textAlign: 'center',
    
      
     
      
    },
    text:{
      fontSize: 24,
      fontWeight: '400',
      marginTop: 28,
      marginBottom: 28,
      textAlign: 'center',

    },
    button:{
      position: 'absolute',
      backgroundColor: 'black',
      borderRadius: 50,
      paddingVertical: 20,
      width: '60%',
      alignItems: 'center',
      bottom: '15%',
      justifyContent: 'center',
      alignSelf: 'center'
    },
    buttonText:{
      color: 'white',
      fontSize: 24,
      
    }

})