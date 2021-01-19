import React,{useState} from 'react';
import { View } from 'react-native';
import {  Text, Radio, } from 'native-base';
import FromFilterModal from './FromFilterModal';

const DateRangeFilter=({openModal,fromdate,todate})=>{
 


    

    return(
           <View style={{flexDirection: 'row',justifyContent: 'space-around',paddingVertical:'7.5%',borderBottomWidth:1,borderColor: 'grey',}}>
                    <Text style={{alignSelf: 'center', fontSize: 20,marginRight: '12%',marginLeft: '3%',}}>Date</Text> 
                     <View style={{flexDirection: 'column',alignItems: 'center',}}>
                         <Text >from</Text>
                         <Text onPress={()=>openModal()} style={{borderWidth: 1.5, borderColor: 'red', padding: '1%',}}>{new Date(fromdate).toString().substr(0,15) }</Text>
                     </View> 
                     <View style={{flexDirection: 'column',alignItems: 'center'}}>
                         <Text >To</Text>
                         <Text onPress={()=>openModal()} style={{borderWidth: 1.5, borderColor: 'red', padding: '1%',}}>{new Date(todate).toString().substr(0,15)}</Text>
               
                     </View> 


                    
            
              
                     
         
            </View>
        
         
    );
 

 

}

export default DateRangeFilter;