import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, TouchableOpacity, AsyncStorage } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

import styles from './style';


export default function App() {

  const [array,setArray] = useState([]);
  
  async function getAllValues(){
    let data;

    try{
      data = await AsyncStorage.getItem("@RNP");
    }catch{
      console.log("deu merda")
    }

    let newData = JSON.parse(data)
    
    const getArray = array.find(i=> i.id === newData[0])

    if(getArray !== undefined){
      console.log("ja esta")
      return
    }

    let object = {
      id:newData[0],
      title:newData[1],
      text:newData[2]
    }

    setArray([...array,object])

  }

  useEffect(()=>{
    getAllValues()
  },[])
  
  const navigation = useNavigation();

  function navigateToNote(item,newFile){
    if(!newFile){
      navigation.navigate('Note',item);
    }else{
      navigation.navigate('Note');
    }
  }

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.textHeader}>React Notepad</Text>
        <TouchableOpacity onPress={()=>{navigateToNote('',true)}}>
          <Feather style={styles.close} name="file-text"/>
        </TouchableOpacity>
      </View>
      <View>
          <TouchableOpacity onPress={getAllValues}>
            <Feather name="rotate-cw" style={styles.close} />
          </TouchableOpacity>
      </View>
      { array ? <FlatList
        data ={array}
        keyExtractor={post => String(post.id)}
        renderItem={({item})=>(
          <View style={styles.container}>
            <View style={styles.content}>
              <TouchableOpacity style={styles.btn} onPress={()=>{navigateToNote(item,false)}}>
                <Feather style={styles.edit} name="edit"/>
                <Text style={styles.texto}>{item.title}</Text>
              </TouchableOpacity>
              <Feather style={styles.close} name="trash"/>
            </View>
          </View>
        )}
        
      />
      :<Text>Array nulo</Text>}
    </>
  );
}