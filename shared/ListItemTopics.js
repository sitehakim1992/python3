import React from 'react'
import {Button, View, Text, StyleSheet} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer, DefaultTheme, DarkTheme, useTheme, useFocusEffect } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';



export default function ListItemTopics({item, icon}){
  const { colors } = useTheme();

  const [color, setColor] = React.useState("#666666")



  // read llocal storage
  const read1 = () => AsyncStorage.getItem('readItems')
    .then((r) => {
      const c = r ? JSON.parse(r) : [];
      if(c.length != 0){

        for(var i=0; i<c.length; i++){

          if(item.key == c[i]){
            setColor("#34B7F1")
          }
        }

      }else{
        setColor("grey")
      }
    })


    useFocusEffect(
      React.useCallback(() => {
        read1()
      }, [])
    );



  return (

    <View style={{backgroundColor:colors.card, ...styles.container}}>
      <View style={{flex:1, flexDirection:'row', alignItems:'center'}}>
        <Ionicons solid style={styles.icon}  name={'logo-javascript'} size={35} color={"#FFBF00"} />
        <View style={{flex:8}}>
          <Text style={{color:colors.text, ...styles.text}}>
           {item.name.slice(0, 25)  }{item.name.length<=25? '':"..."}
          </Text>
        </View>
        <View style={{flex:1}}>
          <Ionicons solid style={styles.icon1} solid  name="checkmark-done-sharp" size={20} color={color} />
        </View>
      </View>
    </View>

  );
}


const styles = StyleSheet.create({
  container:{
    elevation:5,
    borderRadius: 5,
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius:2,
    height:70,
    marginHorizontal: "2%" ,
    marginVertical: 1,
  },
  text:{
    paddingVertical:10,
    marginLeft: 8,
    fontSize:20,
    marginHorizontal:18,
    marginVertical:10,
  },
  logo:{
    position:'absolute',
    marginHorizontal: "0%",
    marginVertical: "1%",
    width:"30%",
    height:80,
    right:10,
    bottom:4,
    resizeMode: 'stretch',
  },
  icon:{
    marginLeft:10
  },
  icon1:{
    position:'relative',
    right:0
  }


  })
