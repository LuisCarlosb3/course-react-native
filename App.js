import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Button,
  TextInput,
  Text,
  FlatList
} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';


const App = () => {
  
  const [goals,setGoals]= useState([]);
  
  const addGoalHandler = (title) =>{
    setGoals(goals => [...goals,{id:Math.random().toString(),value:title}]);
  }
  const removeGoalHandler = goalId =>{
    setGoals(currentGoal=>{
      return currentGoal.filter((goal)=>goal.id !== goalId);
    });
  }
  return (
    <View style={styles.screen}>
      <GoalInput onPressButton={addGoalHandler} onDelete={()=>console.log('oi')}/>
      <FlatList 
        data={goals} 
        renderItem={
          (item) => <GoalItem id={item.item.id} onDelete={removeGoalHandler} title={item.item.value} />
        }
        keyExtractor={(item,index)=>item.id}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  screen:{
    padding:50
  },
  
});

export default App;
