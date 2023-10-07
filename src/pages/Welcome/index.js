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

// SplashScreen.preventAutoHideAsync()
 

export default function Welcome() {
//   const [isReady, setIsReady] = useState(false)

//   useEffect(() => {
//     async function prepare() {
//       try {
//         await Font.loadAsync({
//           Montserrat_400Regular, 
//           Montserrat_700Bold,
//         })
//         await new Promise(resolve => setTimeout(() => resolve,2000)) 
//       } catch (e) {
//           console.warn(e)
//       } finally {
//           setIsReady(true)
//       }
//     }
//     prepare()
//   }, [])

//   const onLayoutRootView = useCallback(() => {
//     if (isReady) {
//       SplashScreen.hideAsync()
//     }
//   },[isReady])

//   if (!isReady) {
//     return null
//   }

  let [fontLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold
  })
  
  if (!fontLoaded) {
    return null
    }


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
      paddingStart: '17%',
      paddingEnd: '17%',
      alignItems: 'center'

    },
    title:{
      color: 'white',
      fontSize: 56,
      fontWeight: 'bold',
      marginTop: 300,
      textAlign: 'center',
      fontFamily: 'Montserrat_700Bold'
    
    },
    text:{
      fontSize: 24,
      fontWeight: '400',
      marginTop: 28,
      marginBottom: 28,
      textAlign: 'center',
      fontFamily: 'Montserrat_400Regular'

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
      
    }

})

