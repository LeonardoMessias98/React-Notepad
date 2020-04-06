import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, TouchableOpacity, Alert, RefreshControl, StatusBar, } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import api from'../../../services/api';
import styles from './style';


export default function App() {

  const [files,setFiles] = useState();

  function wait(timeout) {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  }

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    getAllValues();

    wait(2000).then(() => setRefreshing(false));
  }, [refreshing]);



  async function deleteFile(which){
    api.delete(`files/${which}`);
    Alert.alert("Sucess","File Deleted");
    getAllValues();
  }
  
  async function getAllValues(){
    const dataReceived = await api.get("/files");

    setFiles(dataReceived.data);
  }

  useEffect(()=>{
    getAllValues();
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
        <StatusBar 
          hidden={false}
          backgroundColor="#e02041"
          />
        <Text style={styles.textHeader}>React Notepad</Text>
        <TouchableOpacity style={styles.touchableNewFile} onPress={()=>{navigateToNote('',true)}}>
          <Feather style={styles.newFile} name="file-text"/>
        </TouchableOpacity>
      </View>
      
      { files ? <FlatList
        style={styles.flatlist}
        data ={files}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        keyExtractor={post => String(post.id)}
        renderItem={({item})=>(
          <View style={styles.container}>
            <View style={styles.content}>
              <TouchableOpacity style={styles.btn} onPress={()=>{navigateToNote(item,false)}}>
                
                <Text style={styles.texto}>{(item.title)}</Text>
                
              </TouchableOpacity>
              <View>
                <Feather style={styles.delete} onPress={()=>{deleteFile(item.id)}} name="trash"/>
              </View>
            </View>
          </View>
        )}
        
      />
      :<Text>files nulo</Text>}
    </>
  );
}