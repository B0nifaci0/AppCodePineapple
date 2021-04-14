import { useEffect, useState } from 'react'
import { StyleSheet, Dimensions } from 'react-native';

const { width }  = Dimensions.get('window');

export const widthDisp = width

/**Styles Card enVivo */
const stylesListVerticalPhone = StyleSheet.create({
    container: {
      flex: 1,
      marginLeft:16,
      marginVertical:10
    },
    texTitle:{
      color:'white',
      fontSize:24,
      fontWeight:'bold',
      paddingBottom:10
    },
    
    itemContainer:{
      width: 112,
      height:'auto'
    },
    itemImage:{
      width: 112,
      height:112
    },
    itemEstacion:{
      paddingTop:5,
      color:"#528dfb",
      fontSize:14,
      fontWeight:'bold',
      textAlign:'center'
    },
    itemTitle:{
      textAlign:'center',
      paddingTop:5,
      color:"#a1a3a5",
      fontSize:11,
      fontWeight:'bold'
    },
  });
const stylesListVerticalTablet = StyleSheet.create({
    container: {
      flex: 1,
      marginLeft:16,
      marginVertical:10
    },
    texTitle:{
      color:'white',
      fontSize:28,
      fontWeight:'bold',
      paddingBottom:15
    },
    
    itemContainer:{
      width: 190,
      height:'auto'
    },
    itemImage:{
      width: 190,
      height:190
    },
    itemEstacion:{
      paddingTop:10,
      color:"#528dfb",
      fontSize:20,
      fontWeight:'bold',
      textAlign:'center'
    },
    itemTitle:{
      textAlign:'center',
      paddingTop:10,
      color:"#a1a3a5",
      fontSize:16,
      fontWeight:'bold'
    },
  });

  const stylesListVertical1024 = StyleSheet.create({
    container: {
      flex: 1,
      marginLeft:16,
      marginVertical:10
    },
    texTitle:{
      color:'white',
      fontSize:32,
      fontWeight:'bold',
      paddingBottom:15
    },
    
    itemContainer:{
      width: 250,
      height:'auto'
    },
    itemImage:{
      width: 250,
      height:250
    },
    itemEstacion:{
      paddingTop:10,
      color:"#528dfb",
      fontSize:22,
      fontWeight:'bold',
      textAlign:'center'
    },
    itemTitle:{
      textAlign:'center',
      paddingTop:10,
      color:"#a1a3a5",
      fontSize:18,
      fontWeight:'bold'
    },
  });
  

/**stules Card img */
const stylesCardImgPhone = StyleSheet.create({
   
    container: {
        
        flex: 1,
        width:200,
        borderRadius:5,
        height:120,
        flexDirection: "column"
    },
    image: {
        backgroundColor: 'black',
        flex: 1,
        resizeMode: "cover",
        justifyContent: "flex-end"
    },
    textContainer:{
        flex:1,
        width:"100%",
        padding:8,
        justifyContent:'flex-end',
        backgroundColor:"rgba(0,0,0,0.35)",
        
    },
    textTitulo: {
        color: "#fff",
        fontSize:14,
        fontWeight: "bold",
    },
    textCategoria: {
        textTransform:"uppercase",
        color: "#ffffff",
        fontSize:10,
        fontWeight: "bold",
        backgroundColor:'#00000099',
        padding:2,
        width:120,
        borderRadius:2,
        textAlign:'center'
    }
});

const stylesCardImgTablet = StyleSheet.create({
    container: {
        
        flex: 1,
        width:300,
        borderRadius:5,
        height:180,
        flexDirection: "column"
    },
    image: {
        backgroundColor: 'black',
        flex: 1,
        resizeMode: "cover",
        justifyContent: "flex-end"
    },
    textContainer:{
        flex:1,
        width:"100%",
        padding:8,
        justifyContent:'flex-end',
        backgroundColor:"rgba(0,0,0,0.35)",
        
    },
    textTitulo: {
        color: "#fff",
        fontSize:20,
        fontWeight: "bold",
    },
    textCategoria: {
        textTransform:"uppercase",
        color: "#ffffff",
        fontSize:16,
        fontWeight: "bold",
        backgroundColor:'#00000099',
        padding:2,
        width:220,
        borderRadius:2,
        textAlign:'center'
    }
});

const stylesCardImg1024 = StyleSheet.create({
  container: {
      
      flex: 1,
      width:390,
      borderRadius:5,
      height:250,
      flexDirection: "column"
  },
  image: {
      backgroundColor: 'black',
      flex: 1,
      resizeMode: "cover",
      justifyContent: "flex-end"
  },
  textContainer:{
      flex:1,
      width:"100%",
      padding:8,
      justifyContent:'flex-end',
      backgroundColor:"rgba(0,0,0,0.35)",
      
  },
  textTitulo: {
      color: "#fff",
      fontSize:20,
      fontWeight: "bold",
  },
  textCategoria: {
      textTransform:"uppercase",
      color: "#ffffff",
      fontSize:16,
      fontWeight: "bold",
      backgroundColor:'#00000099',
      padding:2,
      width:220,
      borderRadius:2,
      textAlign:'center'
  }
});


/**Lista trasnmiciosnes */

const stylesListTransmisionesPhone =  StyleSheet.create({
  itemContainer:{
      flex: .5,
      flexDirection:'row',
      justifyContent:'space-between',
      height:64,
      marginBottom:2,
      backgroundColor:"#000",
      
  },
  play:{
      alignItems:'center',
      justifyContent:'center',
      width:40,
  }, 
  tituloContainer:{
      justifyContent:'center',
      paddingHorizontal:10,
      flex:5,
  },
  tituloSectionContainer: {
      justifyContent:'center',
      padding:8,
      flex:5,
  },
  textTitleFecha: {
      fontSize:14,
      color: "#528dfb",
      fontWeight: "bold"
  },
  textTitulo: {
      fontSize:14,
      color: "#ffffff",
  },
  descarga:{
      width:64,
      alignItems:'center',
      justifyContent:'center',
      flexDirection:"row"
      
  },
  /**podcastwiew */
  textPodcast: {
    fontSize:20,
    color: "#2d569a",
    fontWeight: "bold"
  },

  textPrograma: {
      fontSize:20,
      color: "#fff",
      fontWeight: "bold"
  },
  textConductor: {
      textAlign:'center',
      fontSize:16,
      color: "#fff",
    
  }
})

const stylesListTransmisionesTablet=  StyleSheet.create({
  itemContainer:{
      flex: .5,
      flexDirection:'row',
      justifyContent:'space-between',
      height:84,
      marginBottom:6,
      backgroundColor:"#000",
      
  },
  play:{
      alignItems:'center',
      justifyContent:'center',
      width:60,
  }, 
  tituloContainer:{
      justifyContent:'center',
      paddingHorizontal:10,
      flex:5,
  },
  tituloSectionContainer: {
      justifyContent:'center',
      padding:12,
      flex:5,
  },
  textTitleFecha: {
      fontSize:20,
      color: "#528dfb",
      fontWeight: "bold"
  },
  textTitulo: {
      fontSize:20,
      color: "#ffffff",
  },
  descarga:{
      width:84,
      alignItems:'center',
      justifyContent:'center',
      flexDirection:"row"
      
  },

   /**podcastwiew */
   textPodcast: {
    fontSize:28,
    color: "#2d569a",
    fontWeight: "bold"
  },

  textPrograma: {
      fontSize:28,
      color: "#fff",
      fontWeight: "bold"
  },
  textConductor: {
      textAlign:'center',
      fontSize:24,
      color: "#fff",
    
  }
})

const stylesListTransmisiones1024=  StyleSheet.create({
  itemContainer:{
      flex: .5,
      flexDirection:'row',
      justifyContent:'space-between',
      height:84,
      marginBottom:6,
      backgroundColor:"#000",
      
  },
  play:{
      alignItems:'center',
      justifyContent:'center',
      width:60,
  }, 
  tituloContainer:{
      justifyContent:'center',
      paddingHorizontal:10,
      flex:5,
  },
  tituloSectionContainer: {
      justifyContent:'center',
      padding:12,
      flex:5,
  },
  textTitleFecha: {
      fontSize:24,
      color: "#528dfb",
      fontWeight: "bold"
  },
  textTitulo: {
      fontSize:24,
      color: "#ffffff",
  },
  descarga:{
      width:84,
      alignItems:'center',
      justifyContent:'center',
      flexDirection:"row"
      
  },

  /**podcastwiew */
  textPodcast: {
    fontSize:28,
    color: "#2d569a",
    fontWeight: "bold"
  },

  textPrograma: {
      fontSize:28,
      color: "#fff",
      fontWeight: "bold"
  },
  textConductor: {
      textAlign:'center',
      fontSize:24,
      color: "#fff",
    
  }
})


export const useStylesCardList = () => {
    const [ stylesListVertical, setStylesListVertical ] = useState(stylesListVerticalPhone)
    const [ stylesCardImg, setStylesCardImg ] = useState(stylesCardImgPhone)
    const [ stylesListTransmisiones, setStylesListTransmisiones ] = useState(stylesListTransmisionesPhone)
    
    useEffect( () => {
        if(width > 767 && width < 981){
          setStylesListVertical( stylesListVerticalTablet)
          setStylesCardImg(stylesCardImgTablet)
          setStylesListTransmisiones(stylesListTransmisionesTablet)
        }
        if(width > 980){
          setStylesListVertical( stylesListVertical1024)
          setStylesCardImg(stylesCardImg1024)
          setStylesListTransmisiones(stylesListTransmisiones1024)
        }

    }, [width] )

    return { stylesListVertical ,stylesCardImg,stylesListTransmisiones}
}