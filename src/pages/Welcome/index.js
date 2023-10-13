// componente funcional - rnfunction
import { React, useCallback, useEffect, useState } from 'react'
import { 
    View, 
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ImageBackground,
} from 'react-native'

import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { useFonts, Montserrat_400Regular, Montserrat_700Bold  } from '@expo-google-fonts/montserrat';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'
// SplashScreen.preventAutoHideAsync()
 

export default function Welcome() {
  const navigation = useNavigation()
  
  return (
    <View style={styles.container}>
      <ImageBackground animation="flipInX" source={require('../../assets/BackgroundInicio.png')} style={styles.imageBackground}> 
      <Animatable.Image delay={400} animation="flipInY" source={require('../../assets/LogoPequena.png')} style={styles.imageForeground}/>
      <Animatable.Text delay={100} animation="slideInUp" style={styles.title}>Bem Vindo</Animatable.Text>
    </ImageBackground>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.text}>Comece a jornada rumo ao seu sucesso financeiro com o bankking.</Text>
      
        <TouchableOpacity
          style={styles.button}
          onPress={ () => navigation.navigate('SignIn') }
          >
          <Animatable.Text animation="pulse" easing="ea´-uose-out" iterationCount="infinite" style={styles.buttonText}>Iniciar</Animatable.Text>
        </TouchableOpacity>

      </Animatable.View>

      
    
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: "black"
    },
    imageBackground:{
      flex: 2,
      width: 'auto',
      height: 620,
      resizeMode: 'cover',
      justifyContent: 'center',
      alignItems: 'center',
    },
    imageForeground:{
      width: 94,
      height: 55.49,
      marginBottom: 250

    },
    containerForm:{
      flex: 1,
      backgroundColor: '#fff',
      borderTopRightRadius: 25,
      borderTopLeftRadius: 25,
      paddingStart: '8%',
      paddingEnd: '8%',
      alignItems: 'center'

    },
    title:{
      color: 'white',
      fontSize: 56,
      fontWeight: 'bold',
      marginTop: 30,
      marginBottom: 20,
      textAlign: 'center',
      //fontFamily: 'Montserrat_700Bold'
    
    },
    text:{
      fontSize: 24,
      fontWeight: '400',
      marginTop: 36,
      marginBottom: 28,
      textAlign: 'center',
      //fontFamily: 'Montserrat_400Regular'

    },
    button:{
      position: 'absolute',
      backgroundColor: 'black',
      borderRadius: 50,
      paddingVertical: 20,
      width: '50%',
      alignItems: 'center',
      bottom: '15%',
      justifyContent: 'center',
      alignSelf: 'center'
    },
    buttonText:{
      color: 'white',
      fontSize: 24,
      fontWeight: '700',
      textAlign: 'center'
      
    }

})

