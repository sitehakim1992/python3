import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ToastAndroid, Share, Alert, Linking, Modal, Button, TextInput, FlatList } from 'react-native';
// import data from '../myData'
import { NavigationContainer, DefaultTheme, DarkTheme, useTheme,useFocusEffect } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ListItem from './ListItem'
import ListItemTopics from './ListItemTopics'
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';



import AsyncStorage from '@react-native-async-storage/async-storage';




export default function Header({navigation, changeTheme, title, data, itemkey}){
  const [visible, setVisible] = React.useState(false)
  const [text, onChangeText] = React.useState("");
  const [myData, setmyData] = React.useState(data)
  const search = ()=>{
    setVisible(!visible)
  }

  const { colors } = useTheme();






  // write local storage
  const read2 = (itemEl) => AsyncStorage.getItem('progressData'+itemkey)
    .then((result) => {
      const progressdata = result ? JSON.parse(result) : [];
      if(progressdata.progressItems.includes(itemEl.key) == false){
          progressdata.progressItems.push(itemEl.key)
            const objectProgress = {
            progressDbLength: progressdata.progressDbLength,
            progressItems: progressdata.progressItems,
            progressKey: itemkey

          }
        // progressdata.splice(key, 1, objectProgress);

        AsyncStorage.setItem("progressData"+itemkey, JSON.stringify(objectProgress))

      }
      
      // for(let i=0; i<progressdata.length;i++){
      //   if(progressdata[i].progressKey == item.key){
      //     let progressResult= (progressItems.length/progressDbLength);
      //     setProgressD(progressResult);
      //   }
      // }

      
    }).catch(e=>{
      
      
      e.log(e);
    
    })




  function clickItem(navigation, item, fontZoom){
    navigation.navigate("Details",{item:item})
    // change data in local storage
    AsyncStorage.getItem('readItems')
      .then((read) => {
        const c = read ? JSON.parse(read) : [];
          if(c.includes(item.key)==false){
            c.push(item.key);
          }
        AsyncStorage.setItem('readItems', JSON.stringify(c));
      });

    read2(item)

    
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

    // https://galaxystore.samsung.com/detail/com.newhmapps.devlanguage


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
    <Text style={{flex:2 ,color:'white', fontSize: 20}}>{title.slice(0, 20)  }{title.length<=20? '':"..."}</Text>
    {/*  <TouchableOpacity onPress={open}><Icon solid name="bars" size={24} color="white" /></TouchableOpacity>*/}
      <View style={{flex:1, flexDirection: 'row'}}>

        <TouchableOpacity onPress={search}><MaterialIcons solid style={styles.icon}  name="saved-search" size={24} color="white" /></TouchableOpacity>
      {/*  <TouchableOpacity onPress={mytheme}><Icon solid style={styles.icon}  name="moon" size={24} color="white" /></TouchableOpacity>
        <TouchableOpacity onPress={rate}><Icon solid style={styles.icon} name="thumbs-up" size={24} color="white" /></TouchableOpacity>
        <TouchableOpacity onPress={share}><Icon reverse style={styles.icon} name="share-alt" size={24} color="white" /></TouchableOpacity>*/}
      </View>



      <Modal
        animationType="slide"
        visible={visible}
        style={{backgroundColor:colors.card}}
        onRequestClose={() => {
          setVisible(!visible);
        }}
      >
      <View style={{backgroundColor:colors.card}}>

      <TouchableOpacity
              onPress={() => {setVisible(!visible); onChangeText("")}}><Icon
              solid
              style={{left:"90 %", top: "20 %",}}
              name="times" size={24}
              size={30}
              color="red" />
      </TouchableOpacity>

      <TextInput
        style={{ ...styles.input}}
        placeholder="Click here to search"
        onChangeText={onChangeText}
        placeholderTextColor={'grey'}
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
              <ListItemTopics item={item} />
            </TouchableOpacity>
          </View>
        )}
      />


      </View>

      </Modal>


    </View>
  );
}


const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    alignItems:'center',
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
