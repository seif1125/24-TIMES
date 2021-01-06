import React from 'react';
import { StyleSheet, View ,Modal} from 'react-native';
import {  Text, Button,Icon,Picker } from 'native-base';
import NewsTypeFilter from'./NewsTypeFilter';
import LanguageFilter from"./LanguageFilter"
//import DateTimePicker from '@react-native-community/datetimepicker';
//import CountrySelectDropdown from "react-native-searchable-country-dropdown"
// for later use

const  FilterModal= ({modalShown,hideModal}) => {

let openModal=modalShown;
 


return( 
  
     <View style={styles.mainView}>      
        <Modal visible={openModal}>
            <View style={styles.filterheader}>
              <Text style={styles.filterheadertext}>Filter News</Text>   
              <Icon  onStartShouldSetResponder={()=>hideModal()} name="close" style={styles.filtericon}/>
            </View>
            <NewsTypeFilter/>
            <LanguageFilter/>
            
            <Button block style={{ zIndex: -1,margin:'2%',backgroundColor:'red'}} onPress={()=>hideModal()}>
               <Text  >Apply Filter</Text> 
            </Button>    
        </Modal>    
    </View> 
);
}
 
const styles = StyleSheet.create({
  mainView:{
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
 
  },
    filterheader:{
    flexDirection:'row',
    backgroundColor:'rgba(255,0,0,0.8)',
    height:'7%',
    marginTop:'10%',
    alignItems: 'center',
  } ,
  filtericon:{
    color:'white',
   },
  filterheadertext:{
    color:'white',
    fontSize:25,
    marginLeft:'2%',
    width:'90%'
  } ,
  
  typeView:{
     marginVertical: '0%',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      borderColor: '#ddd',
      paddingBottom: '5%',
      borderBottomWidth: 1.5 ,
      borderBottomColor: '#ddd',
      paddingTop: '5%',
      
  },
  optionTitle:{
    marginLeft: '5%',  
    fontWeight: '900',
    
  },
  titleText:{
      fontSize: 20,
  },

  optionControl:{
      flexDirection: 'row',
     alignItems: 'center',
     alignSelf: 'flex-end',
     marginLeft:'15%',

  },
  optionControlRadio:{
      flexDirection: 'row',
      marginHorizontal: '5%',
      alignItems: 'center',
      zIndex: 3,
    
  }
})

export default FilterModal;