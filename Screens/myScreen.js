import React, { useState, useEffect } from 'react';
import { View,Text,StyleSheet,ScrollView } from "react-native";
import { Provider as PaperProvider,Chip} from 'react-native-paper';
import { StatusBar } from "expo-status-bar";
import { AllStyle } from '../style/style';
import Head from '../components/my/header'
import { client } from '../data/my/my';
import Information from '../components/my/information';
import Choice from '../components/my/choice';
const My = () =>{

  const category = ['我的商品','我的收藏','消息列表']
  console.log(client[0].id,client[0].name,client[0].src)
    return (
      <PaperProvider>
        <StatusBar/>
        <View>
      <Head></Head>
      <Information src={client[0].src} id={client[0].id} name={client[0].name}></Information>

      {
        category.map((category,index)=>{
          return(  <Choice key={index} title={category}/>);
          
        })
      }
      </View>
      </PaperProvider>
    );
  };


export default My;