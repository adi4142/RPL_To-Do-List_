import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';

import type { Task } from '../types/task';
import TaskItem from './TaskItem';

type Props = {
  tasks: Task[];
  onToggle: (id: string) => void;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
};

const TaskList = ({
  tasks,
  onToggle,
  onEdit,
  onDelete,
}: Props) => {
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.list}
      ListEmptyComponent={
        <View style={styles.empty}>
          <Text style={styles.emptyTitle}>
            No tasks yet
          </Text>
          <Text style={styles.emptySubtitle}>
            Add a new task to get started!
          </Text>
        </View>
      }
      renderItem={({ item }) => (
        <TaskItem
          item={item}
          onToggle={onToggle}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    paddingBottom: 100,
  },
  empty: {
    alignItems: 'center',
    paddingVertical: 50,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#7155A6',
  },
  emptySubtitle: {
    fontSize: 13,
    color: '#9990A8',
    marginTop: 8,
  },
});

export default TaskList;