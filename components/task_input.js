import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Alert ,Modal} from 'react-native';

function TaskInput(props) {
  const [enteredText, setEnteredText] = useState('');

  // Update the entered text state
  const goalInputHandler = (text) => {
    setEnteredText(text);
  };

  // Add task handler
  const addTaskHandler = () => {
    // Check if entered text is empty
    if (!enteredText.trim()) {
      // Show an alert if text is empty
      Alert.alert('Empty Task', 'Please enter a task before adding.');
      return;
    }

    // Pass the entered text to the parent component
    props.onAddTask(enteredText);

    // Clear the input field after adding the task
    setEnteredText('');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={goalInputHandler}
        value={enteredText}
        style={styles.textInput}
        placeholder="Add a task"
      />
      <Button onPress={addTaskHandler} title="Add Task" />
    </View>
  );
}

export default TaskInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 3,
    borderBottomColor: 'black',
  },
  textInput: {
    flex: 1,
    marginRight: 10,
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
