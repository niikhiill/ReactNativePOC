import React from 'react';
import  {View, Text, StyleSheet} from 'react-native';


function SearchScreen(){
return(
   <View style= {styles.ViewStyle}>
       <Text>
           Search screen
       </Text>
   </View>
)
}

const styles = StyleSheet.create({
    ViewStyle: {
        flex:  1,
    }
})

export default SearchScreen;