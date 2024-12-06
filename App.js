import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { AllStyle } from './style/style';

import HomeScreen from'./Screens/homeScreen';
import MyScreen from './Screens/myScreen';
import OaScreen from './Screens/oaScreen';

const Tab = createBottomTabNavigator();
export default function App() {
  return (
      <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
        //选中和未选中的图标颜色与样式
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          if (route.name === '首页') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === '新闻') {
            iconName = focused ? 'business' : 'business-outline'; // Oa 图标
          } else if (route.name === '我的') {
            iconName = focused ? 'person' : 'person-outline'; // My 图标
          }
          color = focused ? AllStyle.color.tabIconFocused:AllStyle.color.tabIcon;
          return <Ionicons name={iconName} size={30} color={color}  />;
        },
        //调整图标与导航栏的顶部
        tabBarStyle: {
          height: 70,  // 设置底部导航栏的高度
          paddingTop: 10, // 调整底部导航栏的间距，避免图标紧贴底部
          backgroundColor:AllStyle.color.tab,
        },
        //覆盖Tab.Screen组件生成的名字 提供点击前点击后的颜色
        tabBarLabel: ({ focused }) => {
          // 根据焦点状态设置文字颜色
          return (
            <Text 
            style={{ 
              color: focused ? AllStyle.color.tabTextFocused : AllStyle.color.tabText , 
              fontSize: 16, 
              fontWeight:"regular"
              }}>
              {route.name}
            </Text>
          );
        },
        headerShown:false,
    
      })}

      // tabBarOptions={{
      //   activeTintColor: '#FF6347',  // 选中时的图标和文字颜色
      //   inactiveTintColor: '#8B8B8B',  // 未选中时的图标和文字颜色
      // }}
     
    >
      <Tab.Screen name="首页" component={HomeScreen} />
      <Tab.Screen name="新闻" component={OaScreen} />
      <Tab.Screen name="我的" component={MyScreen} />
    </Tab.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({



});
