
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const AppHeader = () => {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.title}>
          To-Do List
        </Text>

        <Text style={styles.subtitle}>
          Organize your tasks,{"\n"}
          get more done!
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 25,
    marginBottom: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#17172E',
  },

  subtitle: {
    fontSize: 16,
    color: '#77778F',
    marginTop: 8,
    lineHeight: 24,
  },

  settingsButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#ECEAFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  settingsIcon: {
    fontSize: 24,
    color: '#5550D8',
  },
});

export default AppHeader;
