
import React,{useState} from 'react';
import { View } from 'react-native';
import {  Text,Picker,Icon } from 'native-base';
export default function LanguageFilter() {
    const [languageArray, setLanguageArray] = useState([
        {language:'english',value:'en'},{language:'francais',value:'fr'},{language:'deutsche',value:'de'},{language:'العربيه',value:'ar'}
    ])
    const [selectedLanguage, setSelectedLanguage] = useState('en')
    return (
       <View style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'flex-start',paddingLeft: '5%',paddingVertical:'5.5%',borderBottomWidth:1,borderColor: 'grey',}}>
                    <Text style={{alignSelf: 'center', fontSize: 20,}}>Language</Text> 
                     <View style={{marginLeft: '15%',width:'45%',}}>
                            <Picker
                        
                                style={{borderWidth: 1,borderColor:'black',width:'130%',}}
                                mode="dropdown"
                                selectedValue={selectedLanguage}
                                onValueChange={(label)=>{setSelectedLanguage(label)}}
                                iosHeader={"select  language"}
                                itemTextStyle={{fontWeight: 'bold',}}
                                iosIcon={<Icon name="arrow-down" style={{color:"red"}}/>}
                                textStyle={{ color: "black" ,borderColor:'red',borderBottomWidth: 2,}}
                                headerStyle={{backgroundColor: 'red',color:'white'}}
                                headerTitleStyle={{color:'white',width:'120%'}}
                                headerBackButtonTextStyle={{width:0}}
                                

                            >
                               {languageArray.map((languageItem)=>{
                                   return(
                                       <Picker.Item   label={languageItem.language} value={languageItem.value} />
                                   )
                               })}
                            </Picker>
                         
                     </View> 
                    </View> 
    )
}

