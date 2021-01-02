import React,{useState} from 'react';
import { StyleSheet, View ,Modal} from 'react-native';
import {  Text, Radio, Button,DatePicker,Icon } from 'native-base';

const  FilterModal= ({modalShown,hideModal}) => {
 const [date, setDate] = useState(new Date())
let openModal=modalShown;
return( 
     <View style={styles.mainView}>
             
        <Modal visible={modalShown}>
            <View style={styles.filterheader}>
             <Text style={styles.filterheadertext}>Filter News</Text>
             <Icon  onStartShouldSetResponder={()=>hideModal()} name="close" style={styles.filtericon}/>
             </View>
            <View style={styles.typeView}>
                 <View style={styles.optionTitle}>
                     <Text style={styles.titleText}>
                         News
                     </Text>
                 </View>
                 <View style={styles.optionControl}>
                 <  View style={styles.optionControlRadio}>
                     <Text >All news</Text>
                     <Radio
                       style={{backgroundColor:'#eee',borderRadius: 25,}}
                        color={"#000000"}
                        selectedColor={"#f00"}
                        selected={true}
                    />
                    </View>  
                 <View style={styles.optionControlRadio}>
                      <Text >Top headlines</Text>
                         <Radio
                         style={{backgroundColor:'#eee',borderRadius: 25,}}
                        color={"#000000"}
                        selectedColor={"#f00"}
                        selected={false}
                     />
                </View>    
            </View>
            </View>
               <View style={styles.typeView}>
                 <View style={styles.optionTitle}>
                     <Text style={styles.titleText}>
                         Date
                     </Text>
                 </View>
                 <View style={styles.optionControl}>
                    <View style={styles.optionControlRadio}>
                     <Text>from</Text>
                      <DatePicker
                      
            defaultDate={date}
            minimumDate={new Date(2018, 1, 1)}
            maximumDate={new Date(2018, 12, 31)}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={true}
            animationType={"fade"}
            androidMode={"default"}
            textStyle={{ color: "red",fontWeight: 'bold', }}
            placeHolderTextStyle={{ color: "#d3d3d3" }}
            onDateChange={(newDate)=>{setDate(newDate)}}
            
           
            disabled={false}
            />
                    </View>  
                    <View style={styles.optionControlRadio}>
                     <Text >to</Text>
                      <DatePicker
                      
            defaultDate={date}
            minimumDate={new Date(2018, 1, 1)}
            maximumDate={new Date(2018, 12, 31)}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={true}
            animationType={"fade"}
            androidMode={"default"}
            textStyle={{ color: "red" ,fontWeight: 'bold',}}
            placeHolderTextStyle={{ color: "#d3d3d3" }}
            onDateChange={(newDate)=>{setDate(newDate)}}
            
           
            disabled={false}
            />
                    </View>  
                    
                 </View>
                 
            
            </View>        
           <Button block style={{margin:'2%',backgroundColor:'red'}} onPress={()=>hideModal()}>
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
    
  }
})

export default FilterModal;