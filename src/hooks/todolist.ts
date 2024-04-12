import { Task, todolistApi } from '@/api/todolist-api'
import { QueryKey } from '@/constants'
import { UseQueryOptions, useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

export const useTodoList = (options?: Omit<UseQueryOptions<Task[]>, 'queryKey' | 'queryFn'>) => {
  return useQuery<Task[]>({
    ...options,
    queryKey: [QueryKey.TASK_KEY],
    queryFn: todolistApi.getAllTodos,
  })
}

export const useGetTodo = (id: string) => {
  return useQuery<Task>({
    queryKey: [QueryKey.TASK_NEW, id],
    queryFn: () => todolistApi.getTodoById(id),
    enabled: !!id,
  })
}

export const useCreateTask = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: todolistApi.createTodos,
    onSuccess(data) {
      queryClient.setQueryData([QueryKey.TASK_NEW], data)
      queryClient.invalidateQueries({ queryKey: [QueryKey.TASK_KEY] })
    },
  })
}

export const useRemoveTask = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: todolistApi.deleteTodos,
    onSuccess(id) {
      queryClient.removeQueries({ [QueryKey.TASK_NEW]: id })
      queryClient.invalidateQueries({ queryKey: [QueryKey.TASK_KEY] })
    },
  })
}

export const useUpdateTask = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: todolistApi.updateTodos,
    onSuccess(data) {
      queryClient.setQueryData([QueryKey.TASK_NEW, data.id], data)
      queryClient.invalidateQueries({ queryKey: [QueryKey.TASK_KEY] })
    },
  })
}
