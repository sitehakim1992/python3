import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ToastAndroid, Share, Alert, Linking, Modal, Button, TextInput, FlatList } from 'react-native';
import data from '../myData'
import Icon from 'react-native-vector-icons/FontAwesome5';
import ListItem from './ListItem'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';




import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
export default function HeaderHome({navigation, changeTheme}){
  const [visible, setVisible] = React.useState(false)
  const [text, onChangeText] = React.useState("");
  const [myData, setmyData] = React.useState(data)
  const search = ()=>{
    setVisible(!visible)
  }


  function clickItem(navigation, item, fontZoom){

    // change data in local storage
    AsyncStorage.getItem('readItems')
      .then((read) => {
        const c = read ? JSON.parse(read) : [];
          if(c.includes(item.key)==false){
            c.push(item.key);
          }
        AsyncStorage.setItem('readItems', JSON.stringify(c));
      });


    navigation.navigate("Details",{item:item})
  }







  // start search here (filtter data)  #####################
  var filtredData = []
  if(text != ""){

    // filter data
    filtredData = data.filter(function(item){

        var querySplit = text.split(" ")
        var words = item.name.split(" ")

        if(item.name.toUpperCase().indexOf(text.toUpperCase()) !== -1){
          return true
        }
        if(item.description.toUpperCase().indexOf(text.toUpperCase()) !== -1){
          return true
        }

        for(var i=0; i<words.length; i++){
            for(var j=0; j<querySplit.length; j++){
                if(words[i].toUpperCase()===querySplit[j].toUpperCase()){
                    return true
                }
            }
        }

        var des = item.description.split(" ")

        for(var i=0; i<des.length; i++){
            if(des[i].toUpperCase()===text.toUpperCase()){
                return true
            }
        }

    })

  }


  // ########################################################


    // open drawer ####################################################################################
    const open = ()=>{
      navigation.openDrawer()
    }


    const mytheme = ()=>{
      changeTheme()
    }



      // rate my application ####################################################################################
      const rate = () => {
        Alert.alert(
          "Rate app",
          "If you love our app, take a moment to rate it",
          [
            {
              text: "Cancel",
              onPress: () => null,
              style: "cancel"
            },
            { text: "Rate", onPress: () => Linking.openURL('https://appgallery.huawei.com/app/C104420321') }
          ],
          { cancelable: true }
        );
      }


      // share my application ####################################################################################
      const share = async () => {
        try {
          const result = await Share.share({
            message:
              'Start Javascript programming language | https://appgallery.huawei.com/app/C104420321',
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
              ToastAndroid.showWithGravity(
                "Share this app",
                ToastAndroid.SHORT,
                ToastAndroid.TOP
              )

            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
      };




  return (
    <View style={styles.container}>
      <TouchableOpacity style={{flex:1}} onPress={open}><Feather solid name="list" size={24} color="white" /></TouchableOpacity>
      <View style={{flexDirection: 'row', flex:1}}>
      {/*  <TouchableOpacity onPress={search}><Icon solid style={styles.icon}  name="search" size={24} color="white" /></TouchableOpacity>*/}
      
      <TouchableOpacity onPress={mytheme}><FontAwesome solid style={styles.icon}  name="moon-o" size={30} color="white" /></TouchableOpacity>
      {/*
      <TouchableOpacity onPress={rate}><SimpleLineIcons solid style={styles.icon} name="like" size={24} color="white" /></TouchableOpacity>
      */}
      <TouchableOpacity onPress={share}><FontAwesome  style={styles.icon} name="share" size={30} color="white" /></TouchableOpacity>
      </View>



      <Modal
        animationType="slide"
        visible={visible}
        onRequestClose={() => {
          setVisible(!visible);
        }}
      >

      <TouchableOpacity
              onPress={() => {setVisible(!visible); onChangeText("")}}><Icon
              solid
              style={{left:"90 %", top: "20 %",}}
              name="times" size={24}
              size={30}
              color="red" />
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        placeholder="Click here to search"
        onChangeText={onChangeText}
        value={text}
      />

      {
        filtredData.length == 0 && text != "" ?
        <View>
          <Text style={styles.text}>Not found, try other words</Text>
        </View>
        :
        null
      }

      <FlatList
        data={text === "" ? myData: filtredData}
        renderItem={({item}) => (
          <View>
            <TouchableOpacity onPress={()=>clickItem(navigation, item)}>
              <ListItem item={item} />
            </TouchableOpacity>
          </View>
        )}
      />




      </Modal>


    </View>
  );
}


const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
  },
  icon:{
    marginHorizontal:15
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
