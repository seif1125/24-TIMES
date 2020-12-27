import React from 'react';
import { StyleSheet, Text, View ,Modal} from 'react-native';

const  FilterModal= ({modalShown}) => {
return( 
     <View>
        <Modal visible={modalShown}>
            <Text>Filter news</Text>
        </Modal>    
    </View> 
);
}

export default FilterModal;