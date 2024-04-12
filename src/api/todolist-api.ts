import axiosClient from './axios-client'
export interface Task {
  id?: number | string
  title: string
  implementer: string
  completed: boolean
}

export const todolistApi = {
  getAllTodos: (): Promise<Task[]> => axiosClient.get('/todos'),
  getTodoById: (id: string): Promise<Task> => axiosClient.get(`/todos/${id}`),
  createTodos: (task: Task) => axiosClient.post('/todos', task),
  updateTodos: (task: Task): Promise<Task> => axiosClient.put(`/todos/${task.id}`, task),
  deleteTodos: (taskId: number): Promise<void> => axiosClient.delete(`/todos/${taskId}`),
}
