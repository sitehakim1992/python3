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
//import python from '../assets/more/python.png';
import MathView, { MathText } from 'react-native-math-view';
import { NavigationContainer, DefaultTheme, DarkTheme, useTheme , useFocusEffect} from '@react-navigation/native';
//import mobileAds from 'react-native-google-mobile-ads';
import PrivacyPolicyModal from '../shared/PrivacyPolicyModal';

// from shared folder
import ListItem from '../shared/ListItem'
import data from '../myData'
//import cppImage from '../assets/more/cpp.png'


export default function HomeScreen({navigation}){
  const [loaded, setLoaded] = React.useState(false);
  //const pythonUri = Image.resolveAssetSource(python).uri;
  //const cppImageUri = Image.resolveAssetSource(cppImage).uri;
  const { colors } = useTheme();

  // mobileAds()
  //   .initialize()
  //   .then(adapterStatuses => {
  //     // Initialization complete!
  //   });

    
  function clickItem(navigation, item , pic, icon, language, ){


  
    // change data in local storage
    AsyncStorage.getItem('readItems')
      .then((read) => {
        const c = read ? JSON.parse(read) : [];
          if(c.includes(item.key)==false){
            c.push(item.key);
          }
        AsyncStorage.setItem('readItems', JSON.stringify(c));
      });
    navigation.navigate("Topics",{item:item, pic:pic, icon: icon, language:language, key: item.key})
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
      }, [])
    );



  return(
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View>
            <TouchableOpacity onPress={()=>clickItem(navigation, item, item.image, item.icon, item.language)}>
              <ListItem item={item} />
            </TouchableOpacity>
          </View>
        )}
      />





       <PrivacyPolicyModal />
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
      width:"90%",
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
