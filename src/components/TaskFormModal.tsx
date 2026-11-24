import React, { useEffect, useState } from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

import type { Task } from '../types/task';
import { categories } from '../const/categories';

type Props = {
  visible: boolean;
  editingTask: Task | null;
  onClose: () => void;
  onSubmit: (
    title: string,
    description: string,
    category: string,
  ) => void;
};

const TaskFormModal = ({
  visible,
  editingTask,
  onClose,
  onSubmit,
}: Props) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState(categories[0]);

  useEffect(() => {
    if (visible) {
      setTitle(editingTask?.title ?? '');
      setDescription(editingTask?.description ?? '');
      setCategory(editingTask?.category ?? categories[0]);
    }
  }, [visible, editingTask]);

  const handleSubmit = () => {
    if (!title.trim()) {
      return;
    }

    onSubmit(title.trim(), description.trim(), category);

    setTitle('');
    setDescription('');
    setCategory(categories[0]);
  };

  const handleClose = () => {
    setTitle('');
    setDescription('');
    setCategory(categories[0]);
    onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={handleClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.heading}>
              {editingTask ? 'Edit Task' : 'Add New Task'}
            </Text>

            <Text style={styles.label}>Task Title</Text>

            <TextInput
              style={styles.input}
              placeholder="Enter task title"
              placeholderTextColor="#A9A0B7"
              value={title}
              onChangeText={setTitle}
            />

            <Text style={styles.label}>Description</Text>

            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Enter description"
              placeholderTextColor="#A9A0B7"
              value={description}
              onChangeText={setDescription}
              multiline
            />

            <Text style={styles.label}>Category</Text>

            <View style={styles.categoryContainer}>
              {categories.map((item) => (
                <TouchableOpacity
                  key={item}
                  style={[
                    styles.categoryButton,
                    category === item && styles.categoryActive,
                  ]}
                  onPress={() => setCategory(item)}
                >
                  <Text
                    style={[
                      styles.categoryText,
                      category === item && styles.categoryTextActive,
                    ]}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <TouchableOpacity
              style={[
                styles.submitButton,
                !title.trim() && styles.disabledButton,
              ]}
              onPress={handleSubmit}
              disabled={!title.trim()}
            >
              <Text style={styles.submitText}>
                {editingTask ? 'Save Changes' : 'Add Task'}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.cancelButton}
              onPress={handleClose}
            >
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(35, 25, 50, 0.4)',
    justifyContent: 'center',
    padding: 22,
  },
  modal: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    padding: 22,
    maxHeight: '85%',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#352B4D',
    marginBottom: 22,
  },
  label: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#655779',
    marginBottom: 8,
    marginTop: 12,
  },
  input: {
    backgroundColor: '#F7F4FB',
    borderRadius: 12,
    padding: 14,
    color: '#352B4D',
    fontSize: 14,
  },
  textArea: {
    height: 90,
    textAlignVertical: 'top',
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  categoryButton: {
    paddingVertical: 9,
    paddingHorizontal: 14,
    borderRadius: 10,
    backgroundColor: '#F0EBFA',
  },
  categoryActive: {
    backgroundColor: '#9275C4',
  },
  categoryText: {
    fontSize: 12,
    color: '#7155A6',
  },
  categoryTextActive: {
    color: '#FFFFFF',
  },
  submitButton: {
    backgroundColor: '#9275C4',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 25,
  },
  disabledButton: {
    opacity: 0.5,
  },
  submitText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  cancelButton: {
    padding: 13,
    alignItems: 'center',
  },
  cancelText: {
    color: '#8B7BAE',
    fontWeight: '600',
  },
});

export default TaskFormModal;