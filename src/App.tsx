import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Profile from './pages/profile'
import Homepage from './pages/home'
import MainLayout from './layouts/main-layout'
import Transaction from './pages/transactions'
import TodoList from './pages/todolist'
import Context from './contexts/user-context'
import ReactTable from './components/tanstack-table/react-table'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Homepage />} />
          <Route path="profile" element={<Profile />} />
          <Route path="transactions/:id" element={<Transaction />} />
          <Route path="task" element={<TodoList />} />
          <Route path="context" element={<Context />} />
          <Route path="table-tanstack" element={<ReactTable />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App
