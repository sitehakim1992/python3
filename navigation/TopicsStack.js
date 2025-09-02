import React from 'react'
import {Button, View, Text} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavigationContainer, DefaultTheme, DarkTheme, useTheme,useFocusEffect } from '@react-navigation/native';
import DetailsHeader from '../shared/DetailsHeader'

// from component
import Topics from '../component/Topics'
import DetailsScreen from '../component/DetailsScreen'

// from shared
import Header from '../shared/Header'

const Stack = createNativeStackNavigator()

export default function TopicsStack({changeMyTheme, the, changeBarColor, v}){


  const { colors } = useTheme();
  const changeTheme = () => {
    changeMyTheme();
  }







  useFocusEffect(
    React.useCallback(() => {
      changeBarColor()
    }, [])
  );





  return(
    <Stack.Navigator
      initialRouteName="Topics"
      screenOptions={{
        headerStyle: {
          backgroundColor: (the == 'light' || the==null)?  v: colors.card,
          },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'normal',
          },
      }}>

      <Stack.Screen
        name="Topics"
        options={({navigation}) =>  (
          {
            title: '',
            headerTitle: ()=> <Header navigation={navigation} changeTheme={changeTheme} th={the} />
            }
        )}>
        {({navigation, route})=><Topics navigation={navigation} route={route} />}


        </Stack.Screen>

      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={({navigation, route}) => (
          {
            title:route.params.item.name,
            headerTitle: ()=><DetailsHeader navigate={navigation} num={route.params.item.key} />
          }
        )}/>

    </Stack.Navigator>
  );


}
