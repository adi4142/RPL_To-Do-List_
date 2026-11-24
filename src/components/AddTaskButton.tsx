import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

type Props = {
  onPress: () => void;
};

const AddTaskButton = ({ onPress }: Props) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={styles.text}>+ Add New Task</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 50,
    left: 20,
    right: 20,
    backgroundColor: '#9275C4',
    padding: 17,
    borderRadius: 16,
    alignItems: 'center',
    elevation: 5,
  },
  text: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default AddTaskButton;