
import { StyleSheet, View, Text,Pressable} from 'react-native';


function TaskItem(props){
    return(
        <Pressable android_ripple={{color: '#dddddd'}}onPress={props.onDeleteItem.bind(this,props.id)}>
        <View style={styles.taskItem} key={props} >
        <Text style={styles.taskText}> {props.text}</Text>
        </View>
        </Pressable>
    )
};

export default TaskItem;
const styles = StyleSheet.create({
    taskItem: {
        margin: 8 ,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#116173',
      },
      taskText:{
        color: 'white',
    
      }
})