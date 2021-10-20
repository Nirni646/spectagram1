import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CreatePost from '../screens/CreatePost';
import Feed from '../screens/Feed';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator();

const BottomTabNavigator=()=>{
  return (
    
      <Tab.Navigator screenOptions={({route})=>({
        tabBarIcon : ({focused,color,size})=>{
          let iconName;
          if(route.name==='Feed') {
             iconName = focused?'book':'book-outline'
          }
          else if(route.name==='CreatePost'){
            iconName = focused?'create':'create-outline'
          }
          return <Ionicons name={iconName} size={size} color={color} />
        },

      })}
      tabBarOptions={{
        activeTintColor : 'tomato',
        inactiveTintColor : 'grey'
      }} >
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="CreatePost" component={CreatePost} />
      </Tab.Navigator>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default BottomTabNavigator;