import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity,
   ToastAndroid, Share, Alert, Linking, Modal,
    Button, TextInput, FlatList } from 'react-native';
import data from '../myData'
import Icon from 'react-native-vector-icons/FontAwesome5';
import ListItem from './ListItem'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function DetailsHeader({navigation, bookmark1, num, name}){

  const [bookmarks, setBookmarks] = React.useState(false)


  // read llocal storage
  const read1 = () => AsyncStorage.getItem('bookmarks')
    .then((bookmarksRetrived) => {
      const c = bookmarksRetrived ? JSON.parse(bookmarksRetrived) : [];
      for(var i=0; i<c.length; i++){

        if(num == c[i]){
          setBookmarks(true)
        }
      }
    });


    React.useEffect(()=>{
      read1()
    },[])


  // add bookmarks function
  const addBookmarks = () => {
    if(bookmarks == true){
      // write storage
      AsyncStorage.getItem('bookmarks')
        .then((bookmarksRetrived) => {
          const c = bookmarksRetrived ? JSON.parse(bookmarksRetrived) : [];
          const search_index = c.indexOf(num);
          if(search_index >= 0) {
             c.splice(search_index,1);
            }
          AsyncStorage.setItem('bookmarks', JSON.stringify(c));
        }).catch((e)=>{
          alert(e)
        });

      ToastAndroid.showWithGravity(
        "Remeved from your favorite",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
      setBookmarks(!bookmarks)

    }else{

      AsyncStorage.getItem('bookmarks')
        .then((bookmarksRetrived) => {
          const c = bookmarksRetrived ? JSON.parse(bookmarksRetrived) : [];
            if(c.includes(num)==false){
              c.push(num);
            }
          AsyncStorage.setItem('bookmarks', JSON.stringify(c));
        });


      ToastAndroid.showWithGravity(
        "Added to your favorite",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
      setBookmarks(!bookmarks)
    }
  }

  return (
    <View style={styles.container}>
    <Text style={{color:'white', flex:2}}>{name}</Text>
      <View style={{flex:1, flexDirection: 'row'}}>
        <TouchableOpacity onPress={addBookmarks} >
          <Icon solid={bookmarks} reverse style={styles.icon} name="bookmark" size={24} color="yellow" />
        </TouchableOpacity>
      </View>

    </View>
  );
}


const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    alignItems: "center"
  },
  icon:{
    marginHorizontal:15,
  },
  text:{
    marginHorizontal:30,
    fontSize: 20,
    color:'red'
  },
  input: {
    height: 60,
    borderRadius: 10,
    marginVertical: 20,
    marginHorizontal: 10,
    padding: 10,
    fontSize: 20,
    borderWidth: 1,
    borderColor: 'grey'
  },



})
