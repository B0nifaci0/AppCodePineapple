import React , {  Component} from 'react';

import {Text,View,StyleSheet, Image, ActivityIndicator, FlatList} from 'react-native';
/* FUNCION DE NUESTRA PANTALLA DE POst */
//export default function ScreenPost(){
  export default class ScreenPost extends Component {
    constructor(props){
      super(props);
      this.state = {
        post: [],
        isLoading: true
      };
    }
  componentDidMount(){
    fetch('http://10.0.2.2:8000/api/posts')
    .then((response) => response.json())
    .then((json) =>{
      this.setState({ post: json.posts});
    })
    .catch((error) => console.error(error))
    .finally(()=>{
      this.setState({isLoading: false});
    });
  }
    render(){
      const { post, isLoading} = this.state;
    return(
    
      <View style={{flex:1, padding:24}}>
        { isLoading ? <ActivityIndicator/> : (
          <FlatList
          data={post}
          keyExtractor = {({ id } , index) => id}
          renderItem = {({ item }) => (
            <Text>{item.title}</Text>, 
            <Image style={styles.imageCategory} source={{uri: item.image}} />
            
          )}
          />)}
      </View>
    );
  }
};

const styles = StyleSheet.create({
    container: {
    flex: 1,
    padding: 20,
    },
    imageCategory: {
        width: 90,
        height: 90,
      },

});