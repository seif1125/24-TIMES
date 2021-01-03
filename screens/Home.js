import React,{useState} from 'react';
import { StyleSheet, Text, View ,Keyboard} from 'react-native';
import {Icon,Input } from 'native-base';
import CategeoryList from "../components/CategeoryList";
import FilterModal from "../components/FilterModal";
import CountrySelectDropdown from "react-native-searchable-country-dropdown"
const Home= () => {
const [modalShown, setModalShown] = useState(false)
const [resetIconDisplayStyle, setResetIconDisplayStyle] = useState({display:'none'})
const [searchText, setSearchText] = useState('');

const handleSearchInput=(value)=>{ 
  setSearchText(value)
}
const makeClearIconVisible=(visible)=>{
  if(visible){
    setResetIconDisplayStyle({display:'flex'})
  }
  else{
    setResetIconDisplayStyle({display:'none'})
  }
}
const ShowModal=()=>{
  setModalShown(true)
}
const hideModal=()=>{
  setModalShown(false)
}
const clearSearchInput=()=>{
  setSearchText('')
  makeClearIconVisible(false)
  Keyboard.dismiss();
}

return (      
  <View style={styles.BackgroundView}>  
    <FilterModal modalShown={modalShown} hideModal={()=>hideModal()}/>
    <View style={styles.menuheader}>
      <Text style={styles.menuheadertext}>News</Text>
      <Icon  onStartShouldSetResponder={()=>ShowModal()} name="filter" style={styles.filtericon}/>
    </View>
    <View style={styles.searchcontainer}>
      <Icon name="ios-search" style={styles.searchicon}/>
      <View style={styles.searchview}>  

        <Input placeholder="Search Your news here"  
        onFocus={()=>makeClearIconVisible(true)} 
        onChangeText={handleSearchInput}
        value={searchText} 
        style={styles.searchinput}/>

        <Icon name="close" 
        onStartShouldSetResponder={()=>{clearSearchInput()}} 
        style={[styles.reseticon,resetIconDisplayStyle]}
        />
      </View>
    </View>  
      <CategeoryList/>
        <CountrySelectDropdown
        countrySelect={"EG"}
        style={{flexDirection: 'row',flex: 0.5,}}
        textColor={"#000"}
    />
  </View> 
 
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
    marginLeft:'2%',
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
    alignSelf: 'center',
   },
  reseticon:{
    fontSize:25,
    padding: 12, 
    alignSelf: 'center',
    color:'rgba(27.5,27.5,27.5,0.7)',
   },
  searchview:{
    backgroundColor:'white',
    borderRadius:12.5,
    height:'95%',
    width:'90%',
    paddingLeft:'5%' ,
    marginLeft:'3%',
    flexDirection:'row',
    alignSelf: 'center',
  },
});

export default Home;