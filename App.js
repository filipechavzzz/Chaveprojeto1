import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableHighlight, TextInput } from 'react-native';

export default function App() {
  
  const [valor,setValor]=useState(0)
  const [valor2,setValor2]=useState(0)
  const [valorResultado,setResultado]=useState(0)

  const soma=()=>{
    setResultado(parseInt(valor)+parseInt(valor2))
  }

  return (
    <SafeAreaView style={estilos.display}>
      <Text>Calculadora teste 1</Text>
      <TextInput 
      style={estilos.display}
      value={String(valor)}
      onChangeText={(texto)=>{setValor(texto)}}
      ></TextInput>
      <TextInput 
      style={estilos.display}
      value={String(valor2)}
      onChangeText={(texto)=>{setValor2(texto)}}
      ></TextInput>
      <TextInput 
      style={estilos.display}
      value={String(valorResultado)}
      onChangeText={(texto)=>{setResultado(texto)}}
      ></TextInput>
      <TouchableHighlight
      styel={estilos.botãoSomar}
      onPress={()=>soma()}
      >
        <Text>Somar </Text> 
      </TouchableHighlight>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  conteiner:{
    padding:10
  },
  display:{
    borderWidth:1,
    borderRadius:10,
    padding:10
  },
   botãoSomar:{
    backgroundColor:'#aaa',
    padding:30,
   },
   
});
