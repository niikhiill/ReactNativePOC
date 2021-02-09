import React from 'react';
import  {View, Text, StyleSheet} from 'react-native';


function HomeScreen(){
return(
   <View style= {styles.ViewStyle}>
       <Text>
           Home screen
       </Text>
   </View>
)
}

const styles = StyleSheet.create({
    ViewStyle: {
        flex:  1,
    }
})

export default HomeScreen;