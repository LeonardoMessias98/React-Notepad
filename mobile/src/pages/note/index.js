import React, { useState,useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Text, View, TextInput, TouchableOpacity, Modal, Alert} from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';

import api from'../../../services/api';

import styles from './style';

export default function App() {
  const [titleValue,setTitleValue] = useState('');
  const [textValue, setTextValue ] = useState('');
  const [modal,setModal] = useState(false);

  const navigation = useNavigation();
  const route = useRoute();

  const item = route.params;

  function modaView(){
    if(!modal){
      setModal(true)
    }else{
      setModal(false)
    }
  }

  async function catchFile(){
    if (item){
      setTextValue(item.text);
      setTitleValue(item.title);
    }
  }

  useEffect(()=>{
    catchFile()
  },[]);

  function goBack(){
    navigation.goBack();
  }

  async function saveFile(){
    if (item === undefined){
      let dataToSend = {"title": titleValue, "text": textValue}
    
      api.post("/files",dataToSend);

    }else{    
      let dataToUpdate = {"title":titleValue,"text":textValue}

      api.put(`/files/${item.id}`,dataToUpdate);

    }

    Alert.alert("Sucess","File saved");

    goBack();
  
  }

  return (
    <>
      <View style={styles.header}>
          <TouchableOpacity>
            <Feather style={styles.iconWhite} onPress={goBack} name="arrow-left"/>
          </TouchableOpacity>
          <Text style={styles.textHeader}>React Notepad</Text>
          <TouchableOpacity>
            <Feather style={styles.iconWhite} onPress={modaView} name="menu"/>
          </TouchableOpacity>
          <Modal
            transparent={true}
            visible={modal}
            >
            <View style={styles.divIcons}>
              <TouchableOpacity onPress={saveFile}>
                <Feather style={styles.iconRed} name="save"/>
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionicons onPress={modaView} style={styles.iconRed} name="md-color-palette"/>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.modalOut} onPress={modaView}>
              <Text></Text>
            </TouchableOpacity>
          </Modal>
        </View>
      <View style={styles.container}>
        <TextInput
          style={styles.titleUser} 
          value ={titleValue}
          onChangeText={text => setTitleValue(text)}
          placeholder = "Type a title"></TextInput>
          <TextInput
          multiline={true}
          style={styles.textUser} 
          value ={textValue}
          onChangeText={text => setTextValue(text)}
          placeholder = "Type a text"></TextInput>
      </View>
    </>
  );
}