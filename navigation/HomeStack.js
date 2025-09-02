import React from 'react'
import {Button, View, Text} from 'react-native'
// import { createStackNavigator } from '@react-navigation/stack'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, DefaultTheme, DarkTheme, useTheme,useFocusEffect } from '@react-navigation/native';
import DetailsHeader from '../shared/DetailsHeader'

// from component
import HomeScreen from '../component/HomeScreen'
import Topics from '../component/Topics'
import DetailsScreen from '../component/DetailsScreen'

// from shared
import Header from '../shared/Header'
import HeaderHome from '../shared/HeaderHome'

const Stack = createNativeStackNavigator()

export default function HomeStack({changeMyTheme, the, changeBarColor, v}){


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
      initialRouteName="Home"
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
        name="Home"
        options={({navigation}) =>  (
          {
            title: 'dhdhd',
            headerTitle: ()=> <HeaderHome navigation={navigation} changeTheme={changeTheme} th={the}  />
            }
        )}>
        {({navigation})=><HomeScreen navigation={navigation} />}


        </Stack.Screen>

      <Stack.Screen
        name="Topics"
        options={({navigation, route}) => (
          {
            title:route.params.item.lang,
            headerTitle:()=><Header navigation={navigation} 
                                    changeTheme={changeTheme} th={the} 
                                    title={route.params.item.title} 
                                    data={route.params.item.data} 
                                    itemkey={route.params.item.key} />
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
            headerTitle: ()=><DetailsHeader navigate={navigation} num={route.params.item.key} name={route.params.item.name} />
          }
        )}/>


    </Stack.Navigator>
  );


}
