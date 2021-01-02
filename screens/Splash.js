import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import {Spinner} from 'native-base';

const Splash = () => {
  
  return (  
      <View>
        <Image style={styles.logo} source={require('../assets/media/logo.png')}/>
        <Text style={styles.TextSlogan}>Be in Touch</Text>
        <Spinner color='red'/>
        <Text style={styles.spinnertext}>loading News</Text>
      </View>
  );
}
const styles = StyleSheet.create(
 {
   logo:{
    
  
   
   },
    TextSlogan:{
      textAlign:'center',
      marginBottom:'15%',
      fontSize:20

    },
    spinnertext:{
      textAlign:'center',
    }

  }
);

export default Splash;