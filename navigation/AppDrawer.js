import React from 'react'
import {ToastAndroid, Share, Linking, Image, SafeAreaView, View, StyleSheet, Text} from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem, Modal } from '@react-navigation/drawer';
import { NavigationContainer, DefaultTheme, DarkTheme, useFocusEffect } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Zocial from 'react-native-vector-icons/Zocial';
import Octicons from 'react-native-vector-icons/Octicons';




import HomeStack from './HomeStack'
// import TopicsStack from './TopicsStack'
import DetailsScreen from '../component/DetailsScreen'
// import AboutUsStack from './AboutUsStack'
import SettingsStack from './SettingsStack'
//import MoreAppsStack from './MoreAppsStack'
import FavoriteStack from './FavoriteStack'
import AsyncStorage from '@react-native-async-storage/async-storage';
import cppImage from '../assets/js.png'



function CustomDrawerContent(props) {

const cppImageUri = Image.resolveAssetSource(cppImage).uri;


  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'Start learn Javascript programming language | https://appgallery.huawei.com/app/C104420321',
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
    <DrawerContentScrollView {...props}>
    <View style={{paddingVertical:30,height: 200,alignItems: 'center', justifyContent: 'center'}}>
      <Image style={styles.logo} source={{uri:cppImageUri}}  />
      {/*
        <Text style={{color:'red', fontWeight:"bold", fontSize:17}}>
      Email: newhmapps@gmail.com</Text>
      */}
    </View>


      <DrawerItemList {...props} />

      <DrawerItem
        label="Rate and review"
        onPress={() => Linking.openURL('https://appgallery.huawei.com/app/C104420321')}
        icon={() => <Ionicons name="star-half" size={24} color="#128C7E" /> } />
      <DrawerItem
        label="Contact us"
        onPress={() => Linking.openURL('mailto:newhmapps@gmail.com') }
        icon={()=> <Zocial name="email" size={24} color="#128C7E" />} />
      <DrawerItem
        label="Share app"
        onPress={onShare}
        icon={()=> <Ionicons name="md-share-social" size={24} color="#128C7E" />} />

    </DrawerContentScrollView>
  );
}


const DrawerContent = (props) => (
  <View>
    <View
      style={{
        backgroundColor: '#f50057',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text style={{ color: 'white', fontSize: 30 }}>
        Header
      </Text>
    </View>
    <DrawerItems {...props} />
  </View>
)


const Drawer = createDrawerNavigator()



export default function AppDrawer(){

  const [barColor, setBarColor] = React.useState("#FFBF00")
  const cppImageUri = Image.resolveAssetSource(cppImage).uri;
  const changeBarColor = async () => {
    AsyncStorage.getItem('barc')
      .then((b)=>{
        var v = JSON.parse(b)
        if(v != null){
          setBarColor(v)
        }

        AsyncStorage.setItem('barc', JSON.stringify(v));


      }).catch((e)=>{
        alert(e)
      })
  }







  // changeTheme
  const [theme, setTheme] = React.useState(null);


  // get bar color






  // Write local storage
  const saveData = async (value) => {
    try {
      await AsyncStorage.setItem('@save_theme', value)
    } catch (e) {
      alert('Failed to save the data to the storage')
    }
  }

  const readData = async () => {
    try {
      const userTheme = await AsyncStorage.getItem('@save_theme')
      if (userTheme !== null) {
        setTheme(userTheme)
      }
    } catch (e) {
      alert('Failed to fetch the data from storage')
    }
  }

  React.useEffect(() => {
    readData()
    changeBarColor()
  }, [])







  const changeMyTheme = () => {
    if(theme == "light" || theme == null){
      saveData('dark')
      setTheme('dark')
      ToastAndroid.showWithGravity(
        "Dark mode activated",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
    }
    if(theme == "dark"){
      saveData('light')
      setTheme('light')
      ToastAndroid.showWithGravity(
        "Light mode activated",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      )
    }
  }









  return(
    <NavigationContainer  theme={(theme == 'light' || theme == null)?  DefaultTheme : DarkTheme}>
      <Drawer.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Home"
          drawerContent={props => <CustomDrawerContent {...props} />}
            >

        <Drawer.Screen
          name="Home"
          options={{
            drawerIcon:({focused})=> <Octicons
                                      name="home"
                                      size={30}
                                      color={focused ? 'black' : '#128C7E'} />
          }} >
          {()=><HomeStack changeMyTheme={changeMyTheme} the={theme} changeBarColor={changeBarColor} v={barColor} />}
        </Drawer.Screen>





        {/*}
        <Drawer.Screen
          name="About us"
          component={AboutUsStack}
          options={{
            drawerIcon:({focused})=> <Icon
                                      name="question-circle"
                                      size={24}
                                      color={focused ? 'black' : '#128C7E'} />
          }}  />
        */}

        <Drawer.Screen
          name="bookmarks"
          component={FavoriteStack}
          options={{
            drawerIcon:({focused})=> <Entypo
                                      name="bookmarks"
                                      size={24}
                                      color={focused ? 'black' : '#128C7E'} />
          }}
        />

        {/*}
        <Drawer.Screen
          name="More applications"
          component={MoreAppsStack}
          options={{
            drawerIcon:({focused})=> <Icon
                                      name="android"
                                      size={24}
                                      color={focused ? 'black' : '#128C7E'} />
          }}
        />
        */}
        <Drawer.Screen
          name="Settings"
          options={{
            drawerIcon:({focused})=> <MaterialCommunityIcons
                              name="robot"
                              size={24}
                              color={focused? "black": "#128C7E"} />
          }}
        >
          {()=><SettingsStack changeMyTheme={changeMyTheme} changeBarColor={changeBarColor} v={barColor}/>}

        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  logo:{
    marginHorizontal: "2%",
    marginVertical: "0%",
    width:"100%",
    borderRadius:10,
    height:'100 %',
    resizeMode: 'stretch'}
})
