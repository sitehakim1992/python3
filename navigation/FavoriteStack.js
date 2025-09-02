import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Favorite from '../component/Favorite'
import DetailsScreen from '../component/DetailsScreen'
import DetailsHeader from '../shared/DetailsHeader'

const Stack = createNativeStackNavigator()


export default function FavoriteStack(){

  return (
    <Stack.Navigator
        initialRouteName="Favorite"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#660066',
            },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'normal',
            },
        }}>

            <Stack.Screen
                name="Favorite"
                component={Favorite}/>

            <Stack.Screen
              name="Details"
              component={DetailsScreen}
              options={({navigation ,route }) => ({
                title: route.params.item.name,
                headerTitle: ()=><DetailsHeader navigate={navigation} num={route.params.item.key} />
              })}/>

    </Stack.Navigator>
  );
}
