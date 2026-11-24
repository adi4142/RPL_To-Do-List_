
import type { Task } from '../types/task';

const API_URL = 'http://10.0.2.2:8000/api';

type ApiResponse<T> = {
  success: boolean;
  message?: string;
  data: T;
};

const request = async <T>(
  endpoint: string,
  options: RequestInit = {},
): Promise<T> => {
  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  const result = await response.json();

  if (!response.ok) {
    const validationErrors = result.errors
      ? Object.values(result.errors).flat().join('\n')
      : '';

    throw new Error(
      validationErrors || result.message || 'Terjadi kesalahan API',
    );
  }

  return result;
};

// Mengambil seluruh tugas
export const getTasks = async (): Promise<Task[]> => {
  const result = await request<ApiResponse<Task[]>>('/tasks');
  return result.data;
};

// Menambahkan tugas
export const createTask = async (
  data: Omit<Task, 'id'>,
): Promise<Task> => {
  const result = await request<ApiResponse<Task>>('/tasks', {
    method: 'POST',
    body: JSON.stringify(data),
  });

  return result.data;
};

// Mengedit tugas
export const updateTask = async (
  id: string,
  data: Partial<Omit<Task, 'id'>>,
): Promise<Task> => {
  const result = await request<ApiResponse<Task>>(`/tasks/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  });

  return result.data;
};

// Menghapus tugas
export const deleteTask = async (id: string): Promise<void> => {
  await request<ApiResponse<null>>(`/tasks/${id}`, {
    method: 'DELETE',
  });
};
