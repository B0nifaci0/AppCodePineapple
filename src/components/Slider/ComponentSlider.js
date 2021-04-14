import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View ,StyleSheet} from 'react-native';
//Importamso nuestrps flta list slider
import {FlatListSlider} from 'react-native-flatlist-slider';


export default function ComponentSlider(){
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://10.0.2.2:8000/api/sliderPost')
          .then((response) => response.json())
          .then((json) => setData(json.sliderPost))
          .then(console.log(setData))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
      }, []);

return(
    <View style={{ flex: 1, padding: 0 }}>
      {isLoading ? <ActivityIndicator/> : (
  /*          <FlatListSlider
           data={data}
           width={275}
           timer={5000}
           component={<Preview />}
           onPress={item => alert(JSON.stringify(item))}
           indicatorActiveWidth={40}
           contentContainerStyle={{paddingHorizontal: 16}}
         /> */
        <FlatListSlider
          data={data}
          timer={50000}
          indicatorContainerStyle={{position:'absolute', bottom: 10}}
          indicatorActiveColor={'#8e44ad'}
          indicatorInActiveColor={'#ffffff'}

        /> 
      )}
    </View>
    );
}
 

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
