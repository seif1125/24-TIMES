import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';

const Splash = () => {
  return (  
      <View>
        <Image source={require('../assets/media/logo.png')}/>
        <Text style={styles.TextSlogan}>Be in Touch</Text>
      </View>
  );
}
const styles = StyleSheet.create(
 {
    TextSlogan:{
      margin:'5%',
    },
  }
);

export default Splash;