// componente funcional - rnfunction
import React from 'react'
import { 
    View, 
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ImageBackground
} from 'react-native'

export default function Welcome() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/BackgroundInicio.png')} style={styles.imageBackground}>
      <Image source={require('../../assets/LogoPequena.png')} style={styles.imageForeground}/>
      <Text style={styles.title}>Bem Vindo</Text>
    </ImageBackground>



      {/* <ImageBackground  
          source={require('../../assets/BackgroundInicio.png')}
          style={styles.containerImageBg}  
      />
      {<Image // Logo pequena/branca
          source={require('../../assets/LogoPequena.png')}
          style={styles.containerLogoPequena}
          
          resizeMode='contain'
        />}

      <Text style={styles.title}>Bem Vindo</Text> */}
        

      <View style={styles.containerForm}>
        <Text style={styles.text}>Comece a jornada rumo ao seu sucesso financeiro com o BankKing.</Text>

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
      flexDirection: 'column'
      //backgroundColor: "#555555"
    },
    imageBackground:{
      flex: 2,
      width: 428,
      height: 651,
      resizeMode: 'cover',
      justifyContent: 'center',
      alignItems: 'center'
      
    },
    imageForeground:{
      width: 94,
      height: 55.49
    },
    containerForm:{
      
      flex: 1,
      backgroundColor: '#fff'
    },
    title:{
      color: 'white',
      textAlign: 'center'
    }

})