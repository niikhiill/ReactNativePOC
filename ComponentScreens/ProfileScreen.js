import React from 'react';
import  {View, Text, StyleSheet} from 'react-native';


function ProfileScreen(){
return(
   <View style= {styles.ViewStyle}>
       <Text>
           Profile screen
       </Text>
   </View>
)
}

const styles = StyleSheet.create({
    ViewStyle: {
        flex:  1,
    }
})

export default ProfileScreen;