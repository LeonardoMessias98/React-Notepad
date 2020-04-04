import React, { useState ,useEffect } from 'react';
import { Text, View, FlatList, TouchableOpacity, AsyncStorage } from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

import styles from './style';




export default function App({data}) {

  const [array,setArray] = useState(null);
  
  useEffect(()=>{
    console.log("recarregou")
    async function getAllValues(){


      if(data === null){
        return
      }
      
      setArray([...array,data]);
      console.log(array,data);     
    }
    getAllValues();
  },[])
  
  const navigation = useNavigation();

  function navigateToNote(){
    navigation.navigate('Note');
  }

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.textHeader}>React Notepad</Text>
        <TouchableOpacity onPress={navigateToNote}>
          <Feather style={styles.close} name="file-text"/>
        </TouchableOpacity>
      </View>
      { !!array ? <FlatList
        data ={array}
        keyExtractor={post => String(post.id)}
        renderItem={({item})=>(
          <View style={styles.container}>
            <View style={styles.content}>
              <TouchableOpacity style={styles.btn} onPress={navigateToNote}>
                <Feather style={styles.edit} name="edit"/>
                <Text style={styles.texto}>{item.title.slice(0,115)}</Text>
              </TouchableOpacity>
              <Feather style={styles.close} name="trash"/>
            </View>
          </View>
        )}
        
      />: <Text></Text>}
    </>
  );
}