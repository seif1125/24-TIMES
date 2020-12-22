import React from 'react';
import { StyleSheet, Text, View ,ImageBackground,Image} from 'react-native';
import{Button} from 'native-base'
import {Font} from 'expo-font'
const Splash = (props) => {
    return (  

      <ImageBackground source={require('../assets/media/background.jpg')} style={styles.BackgroundView}>
        <Image source={require('../assets/media/logo.png')}/>
  <Text style={styles.TextSlogan}>Be in Touch</Text>
        <View style={styles.redcontainer}>

        </View>  

    </ImageBackground> 
  
   
    
  );

}
 const styles = StyleSheet.create({

   BackgroundView:{
     
      flex: 1,
       width:'100%',
       height:'100%',
       alignItems: 'center',
    justifyContent: 'center',
    },

TextSlogan:{
  margin:'5%',

fontWeight:'bold',
    },
  ButtonView:{
    width:'45%',
    margin:'27.5%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row',
    
   
  },
  TextButton:{
    color:'white',
    fontSize:20,
    paddingHorizontal:10,
  },
  redcontainer:{
    width:'100%',
    backgroundColor:'red',
  }
 
});

export default Splash;