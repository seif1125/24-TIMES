import React,{useState} from 'react';
import { View,Modal } from 'react-native';
import {  Text, Radio, } from 'native-base';
import DateTimePicker from '@react-native-community/datetimepicker';
const FromFilterModal=()=>{


    

    return(
         <Modal visible={true} >
             <View style={{ marginVertical: '50%', height:'50%',backgroundColor: 'red',}}>
            <DateTimePicker mode={"date"}
            value={new Date()}
            style={{width: '100%',}}
            />
            </View>
         </Modal>
    );
 

 

}

export default FromFilterModal;