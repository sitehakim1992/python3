import React from 'react'
import {Button,
Text,
View,
FlatList,
TouchableOpacity,
ImageBackground,
Image,
StyleSheet,
ScrollView,
Modal} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import MathView, { MathText } from 'react-native-math-view';
import { NavigationContainer, DefaultTheme, DarkTheme, useTheme , useFocusEffect} from '@react-navigation/native';

// from shared folder
import ListItemTopics from '../shared/ListItemTopics'
// import data from '../myData'




export default function Topics({navigation, route}){
  const {item} = route.params;
  const {pic} = route.params;
  const {key} = route.params;
  const {icon} = route.params;
  const {language} = route.params;
  const { colors } = useTheme();





  // write local storage
  const read2 = (itemEl) => AsyncStorage.getItem('progressData'+key)
    .then((result) => {
      const progressdata = result ? JSON.parse(result) : [];
      if(progressdata.progressItems.includes(itemEl.key) == false){
          progressdata.progressItems.push(itemEl.key)
            const objectProgress = {
            progressDbLength: progressdata.progressDbLength,
            progressItems: progressdata.progressItems,
            progressKey: key

          }
        // progressdata.splice(key, 1, objectProgress);

        AsyncStorage.setItem("progressData"+key, JSON.stringify(objectProgress))

      }
      
      // for(let i=0; i<progressdata.length;i++){
      //   if(progressdata[i].progressKey == item.key){
      //     let progressResult= (progressItems.length/progressDbLength);
      //     setProgressD(progressResult);
      //   }
      // }

      
    }).catch(e=>{
      
      console.log(e);
    
    })



  function clickItem(navigation, item ){
    navigation.navigate("Details",{item:item, language:language})


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


  // read llocal storage
  const read1 = () => AsyncStorage.getItem('readItems')
    .then((r) => {
      const c = r ? JSON.parse(r) : [];
      AsyncStorage.setItem("readItems", JSON.stringify(c))
    })




    useFocusEffect(
      React.useCallback(() => {
        read1();
        console.log(key)
      }, [])
    );



  return(
    <View>
      <FlatList
        data={item.data}
        renderItem={({item}) => (
          <View>

            <TouchableOpacity onPress={()=>clickItem(navigation, item)}>
              <ListItemTopics item={item} icon={icon}  />
            </TouchableOpacity>
          </View>
        )}
      />




    </View>
    );
}




const styles = StyleSheet.create({
    imageWrapper: {
        height: 200,
        width: 200,
        overflow : "hidden"
    },
    theImage: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },
    logo:{
      position:'relative',
      marginHorizontal: "2%",
      marginVertical: "0%",
      width:"95%",
      borderRadius:10,
      height:200,
      resizeMode: 'stretch',
  },
  Header:{
    fontSize:30,
    position:"absolute",
    marginTop:170,
    marginHorizontal:20,

  }
})
