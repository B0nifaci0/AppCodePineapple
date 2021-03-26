/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text, View} from 'react-native';
//navigator Container
import { NavigationContainer } from '@react-navigation/native';
//bottomTabNavigator
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//importamos la libreria iconos
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { HomeStack } from '../codeBlog54/src/navigator/stacks/HomeStack';
import { CategoriesStack } from '../codeBlog54/src/navigator/stacks/CategoriesStack';
import { PostStack } from '../codeBlog54/src/navigator/stacks/PostStack'
/* FUNCION DE NUESTRA PANTALLA DE INFO */
function  InfoScreen(){
  return(
    <View style={{flex:1, justifyContent: 'center' ,alignItems: 'center', backgroundColor: "red"}}>
      <Text>PANTALLA DE INFO</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App(){
  return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Inicio" component={HomeStack}
           options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={'#F32A64'} size={35} />
            ),
          }}
          />
          <Tab.Screen name="Categorias" component={CategoriesStack} 
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="new-box" color={'#F32A64'} size={35} />
              ),
            }}
          />
          <Tab.Screen name="Post" component={PostStack}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="newspaper" color={'#F32A64'} size={35} />
                ),
              }}
          />
            <Tab.Screen name="Info" component={InfoScreen} 
              options={{
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="information" color={'#F32A64'} size={35} />
                ),
              }}
          />
        </Tab.Navigator>
      </NavigationContainer>
  );
  
}
 


  