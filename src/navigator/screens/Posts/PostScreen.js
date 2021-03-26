import * as React from 'react';

import {Text,View,StyleSheet, Image} from 'react-native';

/* FUNCION DE NUESTRA PANTALLA DE POst */
export default function ScreenPost(){
  return(
      <>
     <View style={[styles.container, {
        // Try setting `flexDirection` to `"row"`.
        flexDirection: "column"}]}>
        {/* VISTA CATEGORI 1 */}
        <Text>Laravel > Ver Más</Text>

        <View style={{flex:1, justifyContent:"center", flexDirection:"row", alignItems:"center"}}>

            <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Image style={styles.imageCategory} source={require('../../../assets/Images/C.png')}/></View>
            <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Image style={styles.imageCategory} source={require('../../../assets/Images/C.png')}/></View>
            <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Image style={styles.imageCategory} source={require('../../../assets/Images/C.png')}/></View>
           
        </View>
        <Text>GIT > Ver Más</Text>

        <View style={{flex:1, justifyContent:"center", flexDirection:"row", alignItems:"center"}}>
        <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Image style={styles.imageCategory} source={require('../../../assets/Images/bitbucket-logo.png')}/></View>
        <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Image style={styles.imageCategory} source={require('../../../assets/Images/bitbucket-logo.png')}/></View>
        <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Image style={styles.imageCategory} source={require('../../../assets/Images/bitbucket-logo.png')}/></View>

        </View>
        <Text>Aplicaciones  > Ver Más</Text>
        <View style={{flex:1, justifyContent:"center", flexDirection:"row", alignItems:"center"}}>
            <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Image style={styles.imageCategory} source={require('../../../assets/Images/872px-Android_robot.svg.png')}/></View>
            <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Image style={styles.imageCategory} source={require('../../../assets/Images/872px-Android_robot.svg.png')}/></View>
            <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Image style={styles.imageCategory} source={require('../../../assets/Images/872px-Android_robot.svg.png')}/></View>
            
        </View>
 
    </View>
    </>
  );
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