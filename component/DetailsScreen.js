import React from 'react'
import {Button, Text, View, StyleSheet, TouchableOpacity, ScrollView, ToastAndroid,FlatList, BackHandler} from 'react-native'
import {useTheme} from '@react-navigation/native'
import parse from 'html-react-parser'

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Clipboard from '@react-native-clipboard/clipboard';
import myconfigData from "../myconfigData.json";
import AsyncStorage from '@react-native-async-storage/async-storage';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


import TableComponent from '../shared/TableComponent'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import SyntaxHighlighter from 'react-native-syntax-highlighter';
// import { atomOneDark, atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';







// ***********************************************************************************
const Component = ({mycode, isTheme, fontZoom, l}) => {
  return <SyntaxHighlighter
    language={l}
    // style={isTheme? atomOneDark : atomOneLight}
    fontSize={fontZoom}
  >
    {mycode}
  </SyntaxHighlighter>;
}

// ca-app-pub-3940256099942544/1033173712   test
// ca-app-pub-6551659254419770/1071808478 javascript
export default function DetailsScreen({route, navigation}) {
 
  // change the theme off my code
  // function chnageCodeTheme(){
  //   onchnageCodeTheme()
  // }
// ca-app-pub-6551659254419770/1136469224 javascript
// ca-app-pub-3940256099942544/6300978111  test

  const adUnitId =  'ca-app-pub-6551659254419770/1136469224';

  const { colors } = useTheme();
  const {item} = route.params;
  const {language} = route.params;


  const [copyeEXicone, setcopyeEXicone] = React.useState("copy")
  const [copyeSOLicone, setcopyeSOLicone] = React.useState("copy")
  const [borderLeftViewEX, setborderLeftViewEX] = React.useState('#128C7E')
  const [borderLeftViewSOL, setborderLeftViewSOL] = React.useState('#000')

  const [fontZoom, setFontZoom] = React.useState(14);
  const [colorZoomOut, setColorZoomOut] = React.useState(colors.text);
  const [colorZoomIn, setColorZoomIn] = React.useState(colors.text);

  const [exTheme, setEXtheme] = React.useState(myconfigData.DARK_THEME)
  const [solTheme, setSOLtheme] = React.useState(myconfigData.DARK_THEME)

//   mobileAds()
//     .setRequestConfiguration({
//       // Update all future requests suitable for parental guidance
//       maxAdContentRating: MaxAdContentRating.PG,
// 
//       // Indicates that you want your content treated as child-directed for purposes of COPPA.
//       tagForChildDirectedTreatment: true,
// 
//       // Indicates that you want the ad request to be handled in a
//       // manner suitable for users under the age of consent.
//       tagForUnderAgeOfConsent: true,
// 
//       // An array of test device IDs to allow.
//       testDeviceIdentifiers: ['EMULATOR'],
//     })


  // Write local storage
  const saveData = async (value) => {
    try {
      await AsyncStorage.setItem('@save_zoom', JSON.stringify(value))
    } catch (e) {
      alert('Failed to save the data to the storage')
    }
  }

  const readData = async () => {
    try {
      const useZoom = await AsyncStorage.getItem('@save_zoom')
      if (useZoom !== null) {
        setFontZoom(JSON.parse(useZoom))
      }
    } catch (e) {
      alert('Failed to fetch the data from storage')
    }
  }






  React.useEffect(() => {
    readData();
 

  }, [])












  const copyToClipboard = (text) => {
    Clipboard.setString(text);
    ToastAndroid.showWithGravity(
      "Copied!",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
  };
  return (

    <View style={{flex:1,}}>
        <FlatList
          data={item.posts}
          renderItem={({item}) => (
            <View>

      
      <View style={{backgroundColor: colors.card,borderLeftWidth:6,borderLeftColor:  borderLeftViewEX, ...styles.container}}>
      {item.title ?
        <Text style={{color:'#128C7E',...styles.title}}>
          <MaterialIcons name={"label-important"} size={25} color={'#128C7E'} />{item.title} 
        </Text>: null

      }
      
      {item.description ? <Text style={{color:colors.text,...styles.text}}>{item.description}</Text> : null}
        {/* <Text style={{color:colors.text,...styles.insidecontainer}}>{item.exemple}</Text> */}



        <View>
            {
              item.syntax ? <View style={{marginHorizontal:5 , marginBottom: 20}}>

             <ScrollView horizontal={true}>
                <Text style={{color:colors.text, ...styles.code}} selectable>
                  <View >
                    <Text style={{color: '#128C7E', fontWeight:'bold', fontSize:20}}>
                    <FontAwesome5 style={styles.icon} solid  name={"code"} size={25} color='#128C7E' /> Syntax
                    </Text>
                    <Component mycode={item.syntax} isTheme={exTheme} fontZoom={fontZoom} l={language} />
                  </View>
                </Text>
             </ScrollView>
             <View>
               
             </View>

              </View>: null
            }

            
            {
              item.isHaveComponent ? 
                <Text style={{...styles.text}}><TableComponent componentID={item.componentID} /></Text>
               : null
            }
            
            {
              item.explaineSyntax ? <Text style={{color:colors.text,...styles.text}}>{item.explaineSyntax}</Text> : null
            }
            
           {
             item.exemple ? <View style={{marginHorizontal:5}}>
             <Text style={{textAlign: 'left',left:2, top:4, color:'#128C7E',fontWeight:'bold', fontSize:20,position:'absolute'}}> 
              <FontAwesome5 style={styles.icon} solid  name={"file-code"} size={25} color='#128C7E' /> Exemple
             </Text>

             <ScrollView horizontal={true}>
                <Text style={{color:colors.text, ...styles.code}} selectable>
                  <View >

                    <Component mycode={item.exemple} isTheme={exTheme} fontZoom={fontZoom} l={language} />
                  </View>
                </Text>
             </ScrollView>
             






            {/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/}
            <TouchableOpacity style={{position:"absolute",right: 120, top:3}} onPress={
              ()=> {fontZoom>10 ? (saveData(fontZoom-2),setFontZoom(fontZoom-2),setColorZoomOut(colors.text)): (fontZoom, setColorZoomIn("#C0C0C0"))}
            }>
             <FontAwesome5 style={styles.icon}  name={"search-minus"} size={24} color={colorZoomIn} />
            </TouchableOpacity>


           {/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/}
           <TouchableOpacity style={{position:"absolute",right: 80, top:3}} onPress={
             ()=> {fontZoom<18 ? (saveData(fontZoom+2),setFontZoom(fontZoom+2),setColorZoomIn(colors.text)): (fontZoom,setColorZoomOut("#C0C0C0"))}
           }>
            <FontAwesome5 style={styles.icon}  name={"search-plus"} size={24} color={colorZoomOut} />
           </TouchableOpacity>

           {/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/}
           <TouchableOpacity style={{position:"absolute",right: 5, top:3}} onPress={
             ()=>(copyToClipboard(item.exemple), setcopyeEXicone("check-circle"), setcopyeSOLicone("copy"),setborderLeftViewSOL('black'))
           }>
            <FontAwesome5 style={styles.icon}  name={copyeEXicone} size={24} color={colors.text} />
           </TouchableOpacity>
           {/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/}
           <TouchableOpacity style={{position:"absolute",right: 40, top:3}} onPress={
             ()=> (setEXtheme(!exTheme),setSOLtheme(!solTheme), myconfigData["DARK_THEME"] = !myconfigData.DARK_THEME)
           }>
            <FontAwesome5 style={styles.icon}  name={myconfigData.DARK_THEME?"sun":"moon"} size={24} color={colors.text} />
           </TouchableOpacity>
            </View> : <View></View>
           }
           {item.explaineExemple ? <Text style={{color:colors.text,...styles.text}}>{item.explaineExemple}</Text> : null}
         </View>

            {
              item.output ? <View style={{marginHorizontal:5}}>
             <ScrollView horizontal={true}>
                <Text style={{color:colors.text, ...styles.code}} selectable>
                  <View >
                    <Text style={{color:'#128C7E',fontWeight:'bold', fontSize:20}}>
                    <MaterialCommunityIcons 
                          style={styles.icon} solid  
                          name={"code-greater-than-or-equal"} 
                          size={25} color='#128C7E' /> Output
                    </Text>
                    <Component mycode={item.output} isTheme={exTheme} fontZoom={fontZoom} l={language} />
                  </View>
                </Text>
             </ScrollView>
            

              </View>: null
            }
             {item.explaineOutput ? <Text style={{color:colors.text,...styles.text}}>{item.explaineOutput}</Text> : null}

      </View>

            </View>
        )}
      />



    </View>



  );
}


// <MyAds adID={myAdsID}/>
const styles = StyleSheet.create({
  container:{
    elevation:5,
    borderRadius: 5,
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#fff',
    shadowOpacity: 0.3,
    shadowRadius:2,
    marginHorizontal: 5,
    marginVertical: 8
  },
  insidecontainer:{
    marginHorizontal:4,
    marginVertical:4,
    fontSize:18,
    fontStyle: 'italic'

  },
  title:{
    marginHorizontal: 5,
    fontSize: 25,
    fontFamily: "Cochin",
    fontWeight: 'bold',
    letterSpacing: 1,
  },
    logo:{
      position:'relative',
      marginHorizontal: "0%",
      marginVertical: "1%",
      width:"100%",
      height:300,
      resizeMode: 'stretch',
  },
  code: {
    marginTop: 35,
    marginLeft:0,
    marginBottom:0,
    paddingLeft: 2,
    borderRadius: 20,
    color: "#666",
  },
  text:{
    marginLeft: 16,
    marginBottom: 5,
    marginTop:5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  adsView:{
    height: 50,
  }  

});




//
//
// <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//   <Text>Details Screen: {JSON.stringify(route.params.name)}</Text>
// </View>
