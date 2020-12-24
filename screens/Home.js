import React from 'react';
import { StyleSheet, Text, View ,ImageBackground,SafeAreaView,VirtualizedList} from 'react-native';
import {Icon,Input } from 'native-base';

const Home= () => {

let categeories=['ALL','POLITICS','SPORTS','ECONOMICS','COVID-19','SOCIETY','TECHNOLOGY']

const getItem = (index) => {
  return {
    id: Math.random().toString(12).substring(0),
    title: categeories[index]
  }
}

const Item = ({ title})=> {
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
      <View style={styles.menuheader}>
        <Text style={styles.menuheadertext}>News</Text>
        <View>
          <Icon 
          name="filter"
          style={styles.filtericon}
         />
        </View>
      </View>
      <View style={styles.searchcontainer}>
          <Icon 
          name="ios-search"
          style={styles.searchicon}
          />
          <View style={styles.searchview}>   
            <Input 
            placeholder="Search Your news here" 
            style={styles.searchinput}
            />
            <Icon name="close"
            style={styles.reseticon}
            />
          </View>
      </View>  
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

   menuheader:{
     flexDirection:'row',
     backgroundColor:'rgba(255,0,0,0.8)',
     height:'7%',
     marginTop:'10%',
     alignItems: 'center',
   } ,

   filtericon:{
    color:'white',
   },

   menuheadertext:{
     color:'white',
     fontSize:25,
     marginLeft:5,
     width:'90%'
   } ,

   searchcontainer:{
    flexDirection:'row',
    padding: 7,
    width:'100%',
    height:'7%',
    backgroundColor:'rgba(127.5,127.5,127.5,0.7)',
   },

   searchicon:{
    paddingVertical:10,
   },

   reseticon:{
    fontSize:25,
    padding: 10,   
   },

   searchview:{
    backgroundColor:'white',
    borderRadius:12.5,
    height:'95%',
    width:'90%',
    paddingLeft:'5%' ,
    marginLeft:'3%',
    flexDirection:'row'
   },

   listview:{
    marginTop:'7%',
    marginHorizontal:10,
    height:40,
    width:100,
    borderRadius:25,
    backgroundColor:'red',
    shadowOpacity:1,
    paddingVertical: '8%',
    shadowOpacity:0.2,
   },

   listtext:{
    color:'white', 
    textAlign:'center',
    fontSize:15,
   }
});

export default Home;