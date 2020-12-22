import React from 'react';
import { StyleSheet, Text, View ,ImageBackground,Image,FlatList,SafeAreaView,VirtualizedList} from 'react-native';
import { Container, Header, Tab, Tabs, ScrollableTab } from 'native-base';

const Home= () => {

  let categeories=['ALL','POLITICS','SPORTS','ECONOMICS','COVID-19','SOCIETY','TECHNOLOGY']
  const getItem = (data, index) => {
  return {
    id: Math.random().toString(12).substring(0),
    title: categeories[index]
  }
}
const Item = ({ title })=> {
  return (
    <View style={styles.listview}>
      <Text style={styles.listtext}>{title}</Text>
    </View>
  );
}
const getItemCount = () => {
  return categeories.length;
}
    return (  

    <ImageBackground source={require('../assets/media/background.jpg')} style={styles.BackgroundView}>
    <SafeAreaView >
      <VirtualizedList
      horizontal
        data={categeories}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
        getItemCount={getItemCount}
        getItem={getItem}
      />
    </SafeAreaView>
   
     
    </ImageBackground> 
  
   
    
  );

}
 const styles = StyleSheet.create({

   BackgroundView:{
     
    
       width:'100%',
       height:'100%',

    },


scroll:{
 flex: 1,
  height:23,
  marginTop:'25%',

  
},
listview:{

  marginHorizontal:15,
height:50,
width:120,
  borderRadius:25,
  backgroundColor:'red',
  
  paddingVertical: '8%',
  shadowOpacity:0.2,
},
listtext:{
  color:'white', 
  textAlign:'center',
  fontSize:18
}
 
});

export default Home;