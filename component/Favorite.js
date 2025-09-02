import React from 'react'
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import data from '../myData'
import ListItem from '../shared/ListItem'
import { NavigationContainer, DefaultTheme, DarkTheme, useTheme, useFocusEffect } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import AsyncStorage from '@react-native-async-storage/async-storage';
import db1 from '../database/myData1'
import db2 from '../database/myData2'
import db3 from '../database/myData3'
import db4 from '../database/myData4'

export default function Favorite({navigation}){

  const { colors } = useTheme();


  const [d, setD] = React.useState([...db1, ...db2, ...db3, ...db4]);

  // navigate to Home
  const backHome = ()=>{
    navigation.navigate("Home")
  }


  var arr = []
  // delete from bookmarks
  const deleteItem = (key) => {
    AsyncStorage.getItem('bookmarks')
      .then((bookmarksRetrived)=>{
        var c = bookmarksRetrived ? JSON.parse(bookmarksRetrived) : [];
        arr = d&&d.filter(function(item){
          if(item.key != key || c.length == 1){

            c = c.filter((el)=>{
              if(el!=key){
                return true
              }
            })
            return true
          }
        });
        setD(arr)
        AsyncStorage.setItem('bookmarks', JSON.stringify(c));
      })

  }

  // call local storage
  const fun = () => {
    AsyncStorage.getItem('bookmarks')
      .then((bookmarksRetrived) => {
        var favorite = bookmarksRetrived ? JSON.parse(bookmarksRetrived) : [];
        // filter myData
        arr = d && d.filter(function(item){
          for(var i=0; i<favorite.length; i++){
            if(item.key == favorite[i]){
              return true
            }

          }

        })

        setD(arr)
      }).catch((e)=>{
        alert(e)
      });
  }

  useFocusEffect(
    React.useCallback(() => {
      fun()
    }, [])
  );




  return (

    <View style={{ flex: 1,justifyContent: 'center', alignItems: 'center', flexDirection: 'column', }}>
      <View>
        {d.length == 0 ?
          <View style={{ marginHorizontal:10,marginVertical:100}}>
            <Text
              style={{color:'red', fontSize:30, padding:"2 %"}}>
              You don't have added any favorites.  
              <Icon reverse style={styles.icon} solid name="bookmark" size={30} color="red" />
            </Text>

          </View>
          :
          null
        }
      </View>
      <FlatList
        data={d}
        renderItem={({item}) => (
          <View>


                <View style={{backgroundColor:colors.card, ...styles.container}}>
                <TouchableOpacity
                      onPress={()=>deleteItem(item.key)}>
                      <MaterialCommunityIcons style={styles.icon}  name="delete-forever" size={24} color={'green'} />

                </TouchableOpacity>

                  <TouchableOpacity onPress={()=>clickItem(navigation, item)}>
                    <Text style={{color:colors.text, ...styles.text}}>
                      {item.name}
                    </Text>
                    </TouchableOpacity>


                </View>


          </View>
        )}
      />
      <TouchableOpacity onPress={backHome}>
        <View style={{flexDirection:'row'}}>
          <Icon solid style={styles.icon}  name="arrow-left" size={30} color={colors.text} />
        </View>
      </TouchableOpacity>
    </View>

  );
}



const styles = StyleSheet.create({
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
    marginVertical: 1,
    alignItems:'center'
  },
  text:{
    paddingVertical:10,
    marginLeft: 20,
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
    marginLeft:2,
    padding: 15,
  }
  })


function clickItem(navigation, item, fontZoom){
  navigation.navigate("Details",{item:item})
}
