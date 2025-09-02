import React from 'react'
import {Button, View, Text} from 'react-native'
import Settings from '../component/Settings'
import HomeScreen from '../component/HomeScreen'
import { useFocusEffect } from '@react-navigation/native';


import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

export default function SettingsStack({changeMyTheme, changeBarColor, v}){



  // useFocusEffect(
  //   React.useCallback(() => {
  //     changeBarColor()
  //   }, [])
  // );

  const someChange = ()=>{
    changeBarColor()
  }



  const changeT = ()=>{
    changeMyTheme()
  }
  return(
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{
        headerStyle: {
          backgroundColor: v,
          },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'normal',
          },
      }}>
      <Stack.Screen
        name="Settings" >

          {({navigation})=><Settings changeT={changeT} navigation={navigation} someChange={someChange} />}

      </Stack.Screen>



    </Stack.Navigator>


  );
}
