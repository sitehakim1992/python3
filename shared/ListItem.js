import React from 'react'
import {Button, View, Text, StyleSheet, Image, Dimensions, ProgressBarAndroid} from 'react-native'
import { NavigationContainer, DefaultTheme, DarkTheme, useTheme, useFocusEffect } from '@react-navigation/native';
const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 16);
const imageWidth = dimensions.width;import Icon from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ProgressCircle from 'react-native-progress-circle'


import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import cppImage from '../assets/js.png'



export default function ListItem({item}){

  const { colors } = useTheme();
  const [progressD, setProgressD] = React.useState(0);
  const cppImageUri = Image.resolveAssetSource(cppImage).uri;

  // const [color, setColor] = React.useState("red")


// 
//    read llocal storage
//   const read1 = () => AsyncStorage.getItem('readItems')
//     .then((r) => {
//       const c = r ? JSON.parse(r) : [];
//       if(c.length != 0){
// 
//         for(var i=0; i<c.length; i++){
// 
//           if(item.key == c[i]){
//             setColor("yellow")
//           }
//         }
// 
//       }else{
//         setColor("red")
//       }
//     })


  // read llocal storage
  const read2 = () => AsyncStorage.getItem('progressData'+item.key)
    .then((result) => {
      const progressdata = result ? JSON.parse(result) : [];
      if(progressdata.length == 0){
           const objectProgress = {
             progressDbLength : item.data.length,
             progressItems : [],
             progressKey: item.key
           }

           progressdata.push(objectProgress);


         AsyncStorage.setItem("progressData"+item.key, JSON.stringify(progressdata[0]))
      }else{
     
           let progressResult= (progressdata.progressItems.length/progressdata.progressDbLength);
           setProgressD(progressResult);
      }



       
 // 
 //       for(let i=0; i<progressdata.length;i++){
 //         if(progressdata[i].progressKey == item.key){
 //           let progressResult= (progressItems.length/progressDbLength);
 //           setProgressD(progressResult);
 // 
 //         }
 //       }



      
    }).catch(e=>{
      console.log(e)
    })

    useFocusEffect(
      React.useCallback(() => {
        // read1();
        read2()
      }, [])
    );



  return (

    <View style={{backgroundColor:colors.card, ...styles.container}}>
      <View style={{marginVertical:1, flexDirection:'row'}}>


      {/*
        <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
            <ProgressCircle
                percent={progressD*100}
                radius={35}
                borderWidth={8}
                color="red"
                shadowColor="#D8D8D8"
                bgColor={colors.card}
            >
                <Text style={{ fontSize: 18, color: colors.text }}>{Math.floor(progressD*100)}%</Text>
            </ProgressCircle>
        </View>

      */}

      <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
        <Image style={{height: 60, width:60, marginLeft:3}} source={{uri:cppImageUri}}  />
      </View>
        <View style={{flexDirection:'column', flex:4,alignItems:'center', alignItems:'center'}}>
            <View>
              <Text style={{color:colors.text, fontWeight: 'bold', ...styles.title}}>
              {item.title}
              </Text>
            </View>

            <View style={styles.icon}>
                <FontAwesome  name={item.iconName}   size={50} color={item.iconColor} /> 
            </View>

        </View>

      {/*
        item.key % 2 == 0 ?

        <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
            <ProgressCircle
                percent={progressD*100}
                radius={40}
                borderWidth={8}
                color="red"
                shadowColor="#999"
                bgColor={colors.card}
            >
                <Text style={{ fontSize: 18, color: colors.text }}>{Math.floor(progressD*100)}%</Text>
            </ProgressCircle>
        </View>
        : null
        */
      }


      

      </View>
      
        


      <ProgressBarAndroid styleAttr="Horizontal" 
                          style={{position:'absolute', bottom:0, width:'100%', color:item.iconColor}} 
                          indeterminate={false} 
                          progress={progressD} />
<Text style={{position:'absolute', bottom:2, fontSize:15, color:colors.text, fontWeight:'bold'}}>{Math.floor(progressD*100)}%</Text>  

        
      

                        
      </View>


  );
}


const styles = StyleSheet.create({
  container:{
    justifyContent: 'center', 
    alignItems: 'center',
    elevation:5,
    borderRadius: 20,
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius:2,
    height:140,
    paddingHorizontal: "4%",
    marginHorizontal: "2%" ,
    marginVertical: 3,
    paddingVertical:0,
  },
  title:{
    fontSize:20,
    color: '#003366'
  },
  logo:{
    width:imageWidth-15,
    height:imageHeight,
    borderRadius:10,
    resizeMode: 'stretch',

},
  icon:{
    justifyContent: 'center', 
    alignItems: 'center',
  }
  })
