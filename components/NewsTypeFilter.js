import React,{useState} from 'react';
import { View } from 'react-native';
import {  Text, Radio, } from 'native-base';

const NewsTypeFilter=()=>{
 const [newsType, setnewsType] = useState('all news');
    
 if(newsType==='all news'){
    return(
           <View style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'space-around',paddingVertical:'7.5%',borderBottomWidth:1,borderColor: 'grey',}}>
                    <Text style={{alignSelf: 'flex-start', fontSize: 20,}}>News Type</Text> 
                     <View style={{flexDirection: 'row',}}>
                         <Text onPress={()=>{setnewsType('all news')}}>all news</Text>
                         <Radio  style={ {backgroundColor:'#f1f1f1',borderRadius: '50%'}} selectedColor={'#f00'} selected={true} />
                     </View> 
                     <View style={{flexDirection: 'row',}}>
                         <Text onPress={()=>{setnewsType('')}}>Top headlines</Text>
                         <Radio  style={{ backgroundColor: '#f1f1f1',borderRadius: '50%',}} selectedColor={'#f00'} color={'#000'} selected={false} />
                     </View> 
             </View> 
    );
 }
 else{

    return(
           <View style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'space-around',paddingVertical:'7.5%',borderBottomWidth:1,borderColor: 'grey',}}>
                <Text style={{alignSelf: 'flex-start', fontSize: 20,}}>News Type</Text> 
                <View style={{flexDirection: 'row',}}>
                    <Text onPress={()=>{setnewsType('all news')}}>all news</Text>
                    <Radio  style={{backgroundColor: '#f1f1f1',borderRadius: '50%',}} selectedColor={'#f00'} selected={false} />
                </View> 
                <View style={{flexDirection: 'row',}}>
                    <Text onPress={()=>{setnewsType('')}}>Top headlines</Text>
                    <Radio  style={{backgroundColor: '#f1f1f1',borderRadius: '50%',}} selectedColor={'#f00'} selected={true} />
                </View> 
             </View> 
    );

 }
 

}
export default NewsTypeFilter;