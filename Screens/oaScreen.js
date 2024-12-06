import React, { useState, useEffect } from 'react';
import { View,Text,StyleSheet,ScrollView } from "react-native";
import { Provider as PaperProvider,Searchbar,Chip} from 'react-native-paper';
import { StatusBar } from "expo-status-bar";
import { AllStyle } from '../style/style';
import Head from '../components/oa/header'
import Card from '../components/oa/card'
import {oaData} from '../data/oa/oa'
import { MaterialCommunityIcons } from '@expo/vector-icons';
const Oa = () =>{
    //searchQuery是搜索框里面创建的内容
    const [searchQuery, setSearchQuery] = useState('');
    //filteredData是根据搜索框里的内容筛选出来的数组
    const [filteredData, setFilteredData] = useState(oaData);

    //判断Chip的选中状态
    const [selectedCategory,setSelectedCategory] = useState('全部');
    const categories = ['全部','活动','比赛']

//query是当前输入框里的内容
    function onSearch(query){
        //更改searchQuery的值
        setSearchQuery(query)
        //根据搜索词过滤东西
        if(query){
        //只要当前遍历到的数据里的标题包含我输入的，就放入newData
           const newData = oaData.filter((item)=>
                item.title.includes(query)
            )
            //更新filteredData数组里的内容为过滤数据
            setFilteredData(newData)
        }
        else{
            //框里什么都没有就维持原样
            setFilteredData(oaData)
        }

    }

    function onClick(item){

        setSelectedCategory(item)
        //不要用selectedCategory做判断，因为是异步更新，所以用selectedCategory的时候可以用的是还没更新的值，而不是新的值，
        if(item !== '全部'){
          
          const newData = oaData.filter((ele)=> ele.category === item)
        //   console.log(newData)
            setFilteredData(newData)
    }
        else{
            
            setFilteredData(oaData)
        }
    }

    
    return(
        <PaperProvider>
        {/* <StatusBar backgroundColor={AllStyle.color.myHead} /> */}
        <StatusBar/>
        <ScrollView>
        <View>
          <Head></Head>
          {/* 搜索框 */}
        <Searchbar
        placeholder='请输入您想要查找的内容'
        //有数据的时候才显示x
        clearIcon="close" // 点击清除图标清空搜索框
        //每当搜索框里的文字发送改变，就调用onSearch函数
        onChangeText={onSearch}
        value={searchQuery}
        style={{
            margin:10,
            backgroundColor:"#f0e6d0"
        }}
        >
        </Searchbar>

        {/* 筛选标签 */}
        <View
        style={{
            flexDirection:"row",
            marginLeft:10,
            margin:5,
        }}>
{/* 
        选中的Chip一发生改变，就出发下面这个函数 */}
  
        {
            categories.map((item,index)=>{
             
                return(
                    <Chip
                    key={index}
                    onPress={()=> onClick(item)}
                    //判断当前chip是否被选中,如果被选中，就打勾
                    selected={item === selectedCategory}
                    style={{
                        width:67,
                        marginRight:10,
                        backgroundColor: '#E7E1B9',
                        height:35,
                        borderRadius:15,
                    
                    }}
                    mode={'outlined'}

                    >
                        {item}
                    </Chip>
                );
            })
        }
    </View>
    <View
    style={{
        marginTop:10,
        paddingTop:7,
        backgroundColor:"white",
    }}>
          {
              filteredData.map((item)=>{
                  return(
                      <Card 
                      key={item.id} // 为每个CardComponent添加唯一的key
                      title={item.title}
                       time={item.time} 
                       unit={item.unit}/>
                  );
              })
          }
    </View>
        </View>
        </ScrollView>
  </PaperProvider>
    );
}

export default Oa;