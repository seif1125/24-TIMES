      
import React,{useState} from 'react';
import { View } from 'react-native';
import {  Text} from 'native-base';
import CountrySelectDropdown from "react-native-searchable-country-dropdown"
export default function CountryFilter() {
   const[country,setCountry]=useState("")
 
    
    return (
       <View style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'flex-start',paddingLeft: '5%',paddingVertical:'7.5%',borderBottomWidth:1,borderColor: 'grey',}}>
                    <Text style={{alignSelf: 'center', fontSize: 20,}}>Country</Text> 
                     <View style={{marginLeft: '20%',width:'55%',display: 'flex',alignSelf: 'center',}}>
                         <CountrySelectDropdown
                         countrySelect={(country)=>console.log(country)}
                         textColor={"black"}
                         />
                     </View> 
                    </View> 
    )
}
      
      
      
     