import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, TextInput, TouchableOpacity, AsyncStorage, Alert} from 'react-native';
import { Feather } from '@expo/vector-icons';

import styles from './style';

export default function App() {
  const [titleValue,setTitleValue] = useState('');
  const [textValue, setTextValue ] = useState('');
  const navigation = useNavigation();


  function goBack(){
    navigation.goBack();
  }

  async function saveFile(){
    const data = [Math.random().toString(36).substr(2, 9),titleValue,textValue]

    console.log('entrou na função');
    try{
      Alert.alert("Sucesso","Cadastrado com sucesso");
      navigation.navigate('Main',data)
    }catch(err){
      console.log(err,"Não foi");
    }
  }

  return (
    <>
      <View style={styles.header}>
          <Text style={styles.textHeader}>React Notepad</Text>
          <View style={styles.divIcons}>
            <TouchableOpacity onPress={saveFile}>
              <Feather style={styles.saveIcon} name="save"/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Feather onPress={goBack} style={styles.cornerIcon} name="corner-down-left"/>
            </TouchableOpacity>
          </View>
        </View>
      <View style={styles.container}>
        <TextInput
          style={styles.titleUser} 
          value ={titleValue}
          onChangeText={text => setTitleValue(text)}
          placeholder = "Type a title"></TextInput>
          <TextInput
          style={styles.textUser} 
          value ={textValue}
          onChangeText={text => setTextValue(text)}
          placeholder = "Type a text"></TextInput>
      </View>
    </>
  );
}