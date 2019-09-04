import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
const GoalItem = props =>{
    return (
        <TouchableOpacity activeOpacity={0.5} onPress={props.onDelete.bind(this,props.id)}>
            <View style={styles.listItem} >
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
}
export default GoalItem;

const styles = StyleSheet.create({
    listItem:{
        marginVertical:10,
        padding:10,
        backgroundColor:'#ccc',
        borderColor:'black',
        borderWidth:0.5
    
      }
});