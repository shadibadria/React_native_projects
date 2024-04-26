import { StyleSheet, View ,FlatList} from 'react-native';
import { useState } from 'react';
import TaskItem from './components/task_item'
import TaskInput from './components/task_input'
import { Alert } from 'react-native';
export default function App() {
  
  //state managment
  const [tasks,set_tasks] = useState([]);
  // fired when btn clicked
  function addGoalHandler(entered_text) {
    set_tasks(current_tasks =>[...current_tasks,{text: entered_text, id: Math.random().toString()},])
  };

  const delete_task_handler = (id) => {
    // Display a confirmation dialog before deleting the task
    Alert.alert(
      'Delete Task',
      'Are you sure you want to delete this task?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => {
            // User confirmed deletion, proceed with deletion
            set_tasks((current_tasks) => {
              return current_tasks.filter((task) => task.id !== id);
            });
          },
          style: 'destructive',
        },
      ],
      { cancelable: true }
    );
  };
  

  return (
    <View style={styles.appContainer}>
      <TaskInput onAddTask={addGoalHandler}/>
      <View style={styles.tasksContainer}>
      <FlatList data={tasks} 
      renderItem={(itemData) => {
        return(
          <TaskItem text={itemData.item.text} id={itemData.item.id} onDeleteItem={delete_task_handler} />
      );
      }}
       keyExtractor={(item,index) => {
        return item.id;
       }}
       alwaysBounceVertical={false}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1
  },
 
  textInput: {
    borderWidth: 1,
    borderColor:'#cccccc',
    width: '70%',
    marginRight: 8, 
    padding : 8
  }, 
  tasksContainer: {
    flex: 5,
  },

  

});
