// componente funcional - rnfunction
import React from 'react'
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'

import * as Animatable from 'react-native-animatable'

export default function SignIn() {
  return (
    <View style={styles.container}>
      <View>
        <Animatable.Image animation="fadeInDown"  source={require('../../assets/Logo.png')} style={styles.containerHeader}/>
        <Animatable.Text animation="fadeInUp" style={styles.title}>Comece a jornada rumo ao seu sucesso financeiro com o Bankking.</Animatable.Text>
      </View>
    
      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <TextInput placeholder='CPF/CNPJ'
        style={styles.input}/>
        <TextInput placeholder='Senha'
        style={styles.input}/>
     
      <TouchableOpacity style={styles.button}>
        <Animatable.Text animation="pulse" easing="ease-out" iterationCount="infinite" style={styles.buttonText}>Login</Animatable.Text>
      
      </TouchableOpacity>
      </Animatable.View>


    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'white',
    flex: 1,

  },
  containerForm:{
  },
  containerHeader:{
    marginEnd: '20%',
    marginStart: '20%',
    alignItems: 'center',
    marginTop: 87,
    marginBottom: 74.78   
  },
  title:{
    textAlign: 'center',
    paddingStart: '8%',
    paddingEnd: '8%',
    fontSize: 24,
    alignSelf: 'center',
    fontWeight: '400',
    marginBottom: 48
  },
  input:{
    //position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 40,
    borderColor: 'black',
    borderWidth: 1,
    width: 348,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 24,
    fontSize: 24,
    paddingLeft: 34,
    fontWeight: '700',
    color: '#555'
  },
  button:{
    backgroundColor: 'black',
    borderRadius: 40,
    paddingVertical: 20,
    width: 200,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 160
  },
  buttonText:{
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
    fontWeight: '700'
  }
  
}) 