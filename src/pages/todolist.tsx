import { Task } from '@/api/todolist-api'
import { useCreateTask, useGetTodo, useRemoveTask, useTodoList, useUpdateTask } from '@/hooks/todolist'
import { useState } from 'react'

function TodoListUseState() {
  const [inputValue, setInputValue] = useState('')
  const [inputUpdate, setInputUpdate] = useState('')
  const [id, setId] = useState<string>('')

  const { data: todoList, isLoading, isError } = useTodoList()

  const { mutate } = useCreateTask()

  const { mutate: removeMutate } = useRemoveTask()
  const { mutate: updateMutate } = useUpdateTask()

  const { data: todo } = useGetTodo(id)

  if (isLoading) {
    return <div className="w-5 h-5 border-2 border-blue-500 rounded-full animate-spin" />
  }

  if (isError) {
    return <div>Can't fetch data from server</div>
  }

  const getTodoDetail = (id: string) => {
    setId(id)
  }

  const handleSubmit = () => {
    const data: Task = {
      title: inputValue,
      completed: false,
      implementer: 'Anh duc',
    }
    mutate(data)
    setInputValue('')
  }

  const handleUpdate = (data: Task) => {
    updateMutate(data)
    setInputUpdate('')
  }
  const handleRemove = (id: number) => {
    removeMutate(id)
  }

  return (
    <div className="max-w-[400px] mx-auto pt-5">
      <div className="flex items-center gap-5">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-1 px-6 py-3 text-white border border-green-400 rounded-lg outline-none"
          placeholder="Enter your task"
        />
        <button onClick={handleSubmit} className="p-3 text-white bg-green-500 rounded-lg">
          Add task
        </button>
      </div>
      <h2 className="mt-5 font-bold text-green-600">Everything I need complete for today</h2>

      <div className="flex flex-col gap-3 mt-5 ">
        {todoList?.map((item) => (
          <div key={item.id} className="flex items-center justify-between">
            <li onClick={() => item.id && getTodoDetail(item.id as string)} className="italic">
              {item.title}
            </li>
            <button
              onClick={() => item.id && handleRemove(item.id as number)}
              className="px-2 text-sm text-white bg-red-500 rounded"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      {todo?.title && (
        <div className="w-full mt-4">
          <div className="flex items-center gap-x-2">
            <h3 className="font-bold">Task detail</h3>
          </div>
          <div className="flex items-center gap-x-2">
            <input
              className="flex-1 px-6 py-2 text-white border border-green-500 rounded outline-none"
              type="text"
              placeholder={todo?.title}
              onChange={(e) => setInputUpdate(e.target.value)}
              name=""
              value={inputUpdate}
              id=""
            />
            <button
              onClick={() =>
                handleUpdate({
                  id: todo.id,
                  title: inputUpdate,
                  completed: false,
                  implementer: 'Anh Duc',
                })
              }
              className="p-3 text-sm bg-yellow-500 rounded"
            >
              Update
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default TodoListUseState
