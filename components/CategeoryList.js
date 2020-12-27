import React,{useState} from 'react';
import { StyleSheet, Text, View ,SafeAreaView,VirtualizedList} from 'react-native';
const  CategeoryList = () => {

const categeories=['ALL','POLITICS','SPORTS','ECONOMICS','COVID-19','SOCIETY','TECHNOLOGY']
const[selectedCategeoryIndex,setSelectedCategeoryIndex]=useState(1);
    
const getItem = (data,index) => {
  return {
    id: index,
    title: categeories[index]
  }
}

const Item = ({title,index})=> {

 if(selectedCategeoryIndex==index)   {
    return (
        <View style={styles.selectedlistview}>
            <Text style={styles.selectedlisttext}>{title}</Text>
        </View>
    );
 }
 else{
    return(
        <View onStartShouldSetResponder={()=>selectCategeory(index)}  style={styles.listview}>
            <Text style={styles.listtext}>{title}</Text>
        </View>
    );
 }

}
const selectCategeory=(index)=>{
setSelectedCategeoryIndex(index)
}

const getItemCount = () => {
  return categeories.length;
}


return ( 
        <SafeAreaView >  
        <VirtualizedList
          horizontal
          data={categeories}
          renderItem={({ item }) => <Item title={item.title} index={item.id} />}
          keyExtractor={(item) => item.id.toString() }
          getItemCount={getItemCount}
          getItem={getItem}
        />
      </SafeAreaView>
     );
}
 const styles = StyleSheet.create({
   selectedlistview:{
    marginTop:'7%',
    marginHorizontal:10,
    height:40,
    width:110,
    borderRadius:25,
    backgroundColor:'red',
    shadowOpacity:1,
    paddingVertical: '8%',
    shadowOpacity:0.2,
   },

   selectedlisttext:{
    color:'white', 
    textAlign:'center',
    fontSize:15,
   },
  listview:{
    marginTop:'7%',
    marginHorizontal:10,
    height:40,
    width:110,
    borderRadius:25,
    borderColor:'red',
    borderWidth:1.5,
    shadowOpacity:1,
    paddingVertical: '8%',
    paddingHorizontal: '0%',
    shadowOpacity:0.2,
   },

   listtext:{
    color:'red', 
    textAlign:'center',
    fontSize:15,
   },
});

export default CategeoryList;