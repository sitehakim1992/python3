import React from 'react'
import {StyleSheet, View, Text, TouchableOpacity, Switch, Button, ToastAndroid} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import AsyncStorage from '@react-native-async-storage/async-storage';

import {useTheme, useFocusEffect, useIsFocused} from '@react-navigation/native';

export default function Settings({navigation, changeT, someChange}){

  const [v, setV] = React.useState(null)
  const isFocused = useIsFocused()

  // read initial data fron licall storage
  const readData = async () => {
    try {
      const userTheme = await AsyncStorage.getItem('@save_theme')
      if(userTheme == 'dark'){
        setV(true)
      }
      if(userTheme == 'light'){
        setV(false)
      }

    } catch (e) {
      alert('Failed to fetch the data from storage')
    }
  }

  useFocusEffect(
    React.useCallback(() => {

      readData()
    }, [])
  );


  // Write local storage
  const saveData = async (value) => {
    try {
      await AsyncStorage.setItem('@save_theme', value)
    } catch (e) {
      alert('Failed to save the data to the storage')
    }
  }





  // change theme
  const change = ()=>{

    if(v == true){
      saveData("light")
    }
    if(v==false){
      saveData("dark")
    }
    changeT()
    setV(!v)
  }


  // reset favorites items
  const resetBookmarks = ()=>{

    AsyncStorage.getItem('bookmarks')
      .then((b)=>{
        var book = b?JSON.parse(b):[]
        if(book.length == 0){
          alert("Your favorites allready reset")
        }else{
          AsyncStorage.setItem('bookmarks', JSON.stringify([]));
            alert("done, thank you")
        }

      })
      alert("Your app reset successefuly")
  }


  // reset app readed items
  const resetLamp = ()=>{

      AsyncStorage.getItem('readItems')
        .then((b)=>{
          var boo = b?JSON.parse(b):[]
          if(boo.length == 0){
            alert("All ready done")
          }else{
            AsyncStorage.setItem('readItems', JSON.stringify([]));
              alert("done, thank you")
          }

        })


      // reset progress
      for(let key=1; key<=4;key++){

        AsyncStorage.getItem('progressData'+key)
        .then((result) => {
          const progressdata = result ? JSON.parse(result) : [];
          if(progressdata.progressItems.length != 0){
                const objectProgress = {
                progressDbLength: progressdata.progressDbLength,
                progressItems: [],
                progressKey: key
              }
            AsyncStorage.setItem("progressData"+key, JSON.stringify(objectProgress))

          }
          
        }).catch(e=>{
            console.log(e);
        
        })

      }  

  }


  // show ToastAndroid
  const showToast = (c)=>{
    ToastAndroid.showWithGravity(
      c+" color activated",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
  }



  const changeBarColor = async (value, c) => {
    AsyncStorage.getItem('barc')
      .then((b)=>{
        var v = b?JSON.parse(b):""

        AsyncStorage.setItem('barc', JSON.stringify(value));

        someChange()
        showToast(c)
      }).catch((e)=>{
        alert(e)
      })
  }







  // navigate to Home
  const backHome = ()=>{
    navigation.navigate("Home")
  }


  const {colors} = useTheme()
  return (
    <View>

          <TouchableOpacity onPress={backHome}>
            <View style={{flexDirection:'row'}}>
              <Icon solid style={styles.icon}  name="arrow-left" size={20} color={colors.text} />
            </View>
          </TouchableOpacity>



      <Text style={{color: colors.text, ...styles.title }}>App settings</Text>

      <View style={{backgroundColor:colors.card, ...styles.container}}>

      <View style={{marginLeft:5}}>
        <Icon name="adjust" color={"grey"} size={24} />
      </View>

        <Text style={{color: colors.text, ...styles.text}}>Dark/Light theme</Text>
        <View style={{backgroundColor:"yellow",right:0, position:'absolute'}}>
          <Switch
              onValueChange={change}
              value={v}
           />
        </View>
      </View>







      <View style={{backgroundColor:colors.card, ...styles.container}}>

          <View style={{marginLeft:5}}>
            <Icon name="paint-brush" color={"grey"} size={24} />
          </View>

          <Text style={{color: colors.text, ...styles.text}}>Choos the barNav color</Text>
          <View style={{right:0, position:'absolute'}}>
            <View style={{flexDirection:'row'}}>
              <View style={{padding:8}}><Button color="#075E54" onPress={()=>changeBarColor("#075E54", "Green Dark")} title="1" /></View>
              <View style={{padding:8}}><Button color="#FFBF00" onPress={()=>changeBarColor("#FFBF00", "Yellow")} title="2" /></View>
              <View style={{padding:8}}><Button color="#00A4EF" onPress={()=>changeBarColor("#00A4EF", "Blue")} title="3" /></View>
            </View>
            <View style={{flexDirection:'row'}}>
              <View style={{padding:8}}><Button color="#D32030" onPress={()=>changeBarColor("#D32030", "Red")} title="4" /></View>
              <View style={{padding:8}}><Button color="#660066" onPress={()=>changeBarColor("#660066", "purple")} title="5" /></View>
              <View style={{padding:8}}><Button color="#00ff7f" onPress={()=>changeBarColor("#00ff7f", "Green")} title="6" /></View>
            </View>
          </View>
      </View>







      <View style={{backgroundColor:colors.card, ...styles.container}}>

          <View style={{marginLeft:5}}>
            <Icon name="bookmark" color={"grey"} size={24} />
          </View>

          <Text style={{color: colors.text, ...styles.text}}>Reset app favorit  topics</Text>
          <View style={{backgroundColor:"yellow",right:0, position:'absolute'}}>
            <Button onPress={resetBookmarks} title="click" />
          </View>
      </View>


      <View style={{backgroundColor:colors.card, ...styles.container}}>

        <View style={{marginLeft:5}}>
          <Icon name="lightbulb" color={"grey"} size={24} />
        </View>

          <Text style={{color: colors.text, ...styles.text}}>Reset read items</Text>
          <View style={{backgroundColor:"yellow",right:0, position:'absolute'}}>
            <Button onPress={resetLamp} title="click" />
          </View>
        </View>






    </View>
  );
}

const styles = StyleSheet.create({
  icon:{
    marginLeft:2,
    padding: 15,
  },
  title:{
    fontSize:20,
    paddingBottom:10,

  },
  container:{
    flexDirection: 'row',
    elevation:5,
    borderRadius: 5,
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius:2,
    height:100,
    marginHorizontal: "1%" ,
    marginVertical: 2,
    alignItems:'center'
  },
  text:{
    fontSize:15,
    marginLeft: 20,
  },
  btn:{
    backgroundColor:'#1E6738',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  }

})
