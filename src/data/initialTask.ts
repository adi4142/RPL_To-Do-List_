
import { Task } from '../types/task';

export const initialTasks: Task[] = [
  {
    id: '1',
    title: 'Belajar React Native',
    description: 'Memahami komponen dasar React Native',
    category: 'Learning',
    completed: false,
  },
  {
    id: '2',
    title: 'Mengerjakan tugas sekolah',
    description: 'Menyelesaikan tugas database',
    category: 'School',
    completed: true,
  },
  {
    id: '3',
    title: 'Membaca buku',
    description: 'Membaca buku selama 30 menit',
    category: 'Personal',
    completed: false,
  },
  {
    id: '4',
    title: 'Belajar JavaScript',
    description: 'Memahami array dan object',
    category: 'Learning',
    completed: false,
  },
];
