import React,{useState} from 'react';
import { StyleSheet, View ,Modal} from 'react-native';
import {  Text, Button,Icon,Picker } from 'native-base';
import NewsTypeFilter from'./NewsTypeFilter';
import LanguageFilter from"./LanguageFilter";
import CountryFilter from './CountryFilter';
import DateRangeFilter from './DateRangeFilter';
import DateTimePicker from '@react-native-community/datetimepicker';
//import CountrySelectDropdown from "react-native-searchable-country-dropdown"
// for later use

const  FilterModal= ({modalShown,hideModal}) => {

let openModal=modalShown;
const [toDateModalStyle, setToDateModalStyle] = useState(false)
const [toDate, setToDate] = useState(new Date())
const [fromDateModalStyle, setFromDateModalStyle] = useState(false)
const [fromDate, setFromDate] = useState(new Date(2018,0,1))

 const hideDisplayDateModal=(type)=>{
 

     if(toDateModalStyle===false){
      setToDateModalStyle(true);
     
    }
  

    else if (fromDateModalStyle===false){
        setFromDateModalStyle(true)
      
    }
        else{
           setFromDateModalStyle(false)
           setToDateModalStyle(false)
        }
 
 }

 if(toDateModalStyle){
return( 
 
     <View style={styles.mainView} >      
        <Modal visible={openModal} pointerEvents='none'>
            <View style={styles.filterheader}>
              <Text style={styles.filterheadertext}>Filter News</Text>   
              <Icon  onStartShouldSetResponder={()=>hideModal()} name="close" style={styles.filtericon}/>
            </View>
            <NewsTypeFilter/>
            <LanguageFilter/>
            <CountryFilter/>
            <DateRangeFilter openModal={()=>{hideDisplayDateModal()}} fromdate={fromDate} todate={toDate}/>
            
            <Button block style={{ zIndex: -1,margin:'2%',backgroundColor:'red'}} onPress={()=>hideModal()}>
               <Text  >Apply Filter</Text> 
            </Button>   
         
            <View style={[{justifyContent: 'center', alignSelf:'center',position: 'absolute', top: '16%',  shadowColor: 'grey',shadowOpacity: 0.8,borderRadius: '15%',bottom:'40%',width: '90%',backgroundColor: 'rgb(255,255,255)',height: '40%'},toDateModalStyle]}>
              <Text style={{alignSelf: 'center',}}>Select starting date</Text>
            <DateTimePicker mode={"date"}
            value={toDate}
            onChange={(event,date)=>{setToDate(date)}}
            style={{ display: 'flex',alignSelf: 'center', color:'red',backgroundColor: 'white', width: '90%',borderWidth: 1,borderColor: 'red',marginVertical:'2%',borderRadius: '5%',}}
            /> 
            <Button style={{alignSelf: 'center',backgroundColor: 'red'}} onPress={()=>{setToDateModalStyle()}}>
<Text  >Set Date</Text> 
            </Button>
            </View>  
        </Modal>    
           
    </View> 
);
}
else if (fromDateModalStyle){
  return( 
 
     <View style={styles.mainView} >      
        <Modal visible={openModal} pointerEvents='none'>
            <View style={styles.filterheader}>
              <Text style={styles.filterheadertext}>Filter News</Text>   
              <Icon  onStartShouldSetResponder={()=>hideModal()} name="close" style={styles.filtericon}/>
            </View>
            <NewsTypeFilter/>
            <LanguageFilter/>
            <CountryFilter/>
            <DateRangeFilter  openModal={()=>{hideDisplayDateModal()}} fromdate={fromDate} todate={toDate}/>
            
            <Button block style={{ zIndex: -1,margin:'2%',backgroundColor:'red'}} onPress={()=>hideModal()}>
               <Text  >Apply Filter</Text> 
            </Button>   
         
            <View style={[{justifyContent: 'center', alignSelf:'center',position: 'absolute', top: '16%',  shadowColor: 'grey',shadowOpacity: 0.8,borderRadius: '15%',bottom:'40%',width: '90%',backgroundColor: 'rgb(255,255,255)',height: '40%'},toDateModalStyle]}>
              <Text style={{alignSelf: 'center',}}>Select end date</Text>
            <DateTimePicker mode={"date"}
            onChange={(event,date)=>{setFromDate(date)}}
            value={fromDate}
            style={{ display: 'flex',alignSelf: 'center', color:'red',backgroundColor: 'white', width: '90%',borderWidth: 1,borderColor: 'red',marginVertical:'2%',borderRadius: '5%',}}
            /> 
            <Button style={{alignSelf: 'center',backgroundColor: 'red'}} onPress={()=>{setFromDateModalStyle()}}>
<Text  >Set Date</Text> 
            </Button>
            </View>  
        </Modal>    
           
    </View> 
  )
}
else{
  return( 
 
     <View style={styles.mainView} >      
        <Modal visible={openModal}>
            <View style={styles.filterheader}>
              <Text style={styles.filterheadertext}>Filter News</Text>   
              <Icon  onStartShouldSetResponder={()=>hideModal()} name="close" style={styles.filtericon}/>
            </View>
            <NewsTypeFilter/>
            <LanguageFilter/>
            <CountryFilter/>
            <DateRangeFilter openModal={()=>{hideDisplayDateModal()}} fromdate={fromDate} todate={toDate}/>
            
            <Button block style={{ zIndex: -1,margin:'2%',backgroundColor:'red'}} onPress={()=>hideModal()}>
               <Text  >Apply Filter</Text> 
            </Button>   
        </Modal>
        </View> )   
}
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