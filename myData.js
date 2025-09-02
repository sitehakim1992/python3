import React from 'react'
import {StyleSheet} from 'react-native'

// import data
import db1 from './database/myData1.js';
import db2 from './database/myData2.js';
import db3 from './database/myData3.js';
import db4 from './database/myData4.js';


import {Image} from 'react-native';


import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export  const AllData = {...db1, ...db2, ...db3, ...db4}


const data = [

  {
    title: "Learn python basics",
    iconName: 'road'  ,  
    iconColor: '#003366',
    image: "",
    data: db1,
    progress: 0.0,
    language: 'python',
    key:1

  },
  {
    title: "Control statement & Loops",
    iconName: "refresh",  
    iconColor: '#003366',
    image: "",
    data: db2,
    progress: 0.0,
    language: 'python',
    key:2

  },
  {
    title: "Python functions",
    iconName: 'magnet',  
    iconColor: '#003366',
    image: "",
    data: db3,
    progress: 0.0,
    language: 'python',
    key:3

  },
  {
    title: "Python Object Oriented Programming",
    iconName: 'trophy' ,   
    iconColor: '#003366',
    image: "",
    data: db4,
    progress: 0.0,
    language: 'python',
    key:4

  },


]



export default data;
