import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  total: number;
  completed: number;
  pending: number;
};

const TaskSummary = ({ total, completed, pending }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.number}>{total}</Text>
        <Text style={styles.label}>Total Tasks</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.number}>{completed}</Text>
        <Text style={styles.label}>Completed</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.number}>{pending}</Text>
        <Text style={styles.label}>Pending</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 26,
  },
  card: {
    flex: 1,
    backgroundColor: '#F0EBFA',
    paddingVertical: 18,
    borderRadius: 16,
    alignItems: 'center',
  },
  number: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#7155A6',
  },
  label: {
    fontSize: 11,
    color: '#88799F',
    marginTop: 5,
  },
});

export default TaskSummary;