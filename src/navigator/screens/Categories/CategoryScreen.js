import * as React from 'react';

import {Text, StyleSheet,View, Image} from 'react-native';


export default function CategoryScreen(){
    return (
        <>
         <View style={[styles.container, {
      // Try setting `flexDirection` to `"row"`.
      flexDirection: "column"}]}>
      {/* VISTA CATEGORI 1 */}
      <View style={{flex:1, justifyContent:"center", flexDirection:"row", alignItems:"center"}}>
        <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Image style={styles.imageCategory} source={require('../../../assets/Images/C.png')}/><Text>Laravel</Text></View>
        <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Image style={styles.imageCategory} source={require('../../../assets/Images/bitbucket-logo.png')}/></View>
        <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Image style={styles.imageCategory} source={require('../../../assets/Images/872px-Android_robot.svg.png')}/></View>

      </View>
      <View style={{flex:1, justifyContent:"center", flexDirection:"row", alignItems:"center"}}>
        <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Text>POst-1</Text></View>
        <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Text>POst-2</Text></View>
        <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Text>POst-3</Text></View>
      </View>
      <View style={{flex:1, backgroundColor:"darkorange", justifyContent:"center", flexDirection:"row", alignItems:"center"}}>
        <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Text>POst-1</Text></View>
        <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Text>POst-2</Text></View>
        <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Text>POst-3</Text></View>
      </View>

      {/* Vista categoria 2 */}
      <View style={{flex:1, backgroundColor:"gray", justifyContent:"center", flexDirection:"row", alignItems:"center"}}>
        <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Text>POST-4</Text></View>
        <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Text>POST-5</Text></View>
        <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Text>POST-6</Text></View>
      </View>
      <View style={{flex:1, backgroundColor:"gray", justifyContent:"center", flexDirection:"row", alignItems:"center"}}>
        <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Text>POST-4</Text></View>
        <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Text>POST-5</Text></View>
        <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Text>POST-6</Text></View>
      </View>
      <View style={{flex:1, backgroundColor:"gray", justifyContent:"center", flexDirection:"row", alignItems:"center"}}>
        <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Text>POST-4</Text></View>
        <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Text>POST-5</Text></View>
        <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Text>POST-6</Text></View>
      </View>
    </View>  
        </>
    )
}


const styles = StyleSheet.create({
    container: {
    flex: 1,
    padding: 20,
    },
    imageCategory: {
        width: 68,
        height: 68,
      },

});
