
import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { Task } from '../types/task';

type Props = {
  item: Task;
  onToggle: (id: string) => void;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
};

const TaskItem = ({
  item,
  onToggle,
  onEdit,
  onDelete,
}: Props) => {
  return (
    <View style={styles.taskCard}>

      <TouchableOpacity
        style={styles.checkboxContainer}
        onPress={() => onToggle(item.id)}
      >
        <View
          style={[
            styles.checkbox,
            item.completed && styles.checkboxCompleted,
          ]}
        >
          {item.completed && (
            <Text style={styles.checkmark}>✓</Text>
          )}
        </View>
      </TouchableOpacity>

      <View style={styles.taskInfo}>
        <Text
          style={[
            styles.taskTitle,
            item.completed && styles.completedText,
          ]}
        >
          {item.title}
        </Text>

        <Text style={styles.taskDescription}>
          {item.description || 'Tidak ada deskripsi'}
        </Text>

        <View style={styles.categoryBadge}>
          <Text style={styles.categoryText}>
            {item.category}
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.actionButton}
        onPress={() => onEdit(item)}
      >
        <Text style={styles.editIcon}>✎</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => onDelete(item.id)}
      >
        <Text style={styles.deleteIcon}>✕</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  taskCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 16,
    marginBottom: 14,
    elevation: 2,
  },

  checkboxContainer: {
    marginRight: 12,
    paddingTop: 3,
  },

  checkbox: {
    width: 23,
    height: 23,
    borderRadius: 7,
    borderWidth: 2,
    borderColor: '#B8B5D9',
    justifyContent: 'center',
    alignItems: 'center',
  },

  checkboxCompleted: {
    backgroundColor: '#5851E8',
    borderColor: '#5851E8',
  },

  checkmark: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },

  taskInfo: {
    flex: 1,
  },

  taskTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#25253D',
  },

  completedText: {
    textDecorationLine: 'line-through',
    color: '#9999AA',
  },

  taskDescription: {
    fontSize: 12,
    color: '#88889C',
    marginTop: 5,
    lineHeight: 18,
  },

  categoryBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#ECEAFF',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    marginTop: 10,
  },

  categoryText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#5851E8',
  },

  actionButton: {
    width: 32,
    height: 32,
    borderRadius: 9,
    backgroundColor: '#ECEAFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 6,
  },

  editIcon: {
    fontSize: 19,
    color: '#5851E8',
  },

  deleteButton: {
    width: 32,
    height: 32,
    borderRadius: 9,
    backgroundColor: '#FFECEC',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 6,
  },

  deleteIcon: {
    fontSize: 15,
    color: '#E05252',
    fontWeight: 'bold',
  },
});

export default TaskItem;
