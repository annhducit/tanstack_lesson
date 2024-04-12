import { Box, Heading } from '@chakra-ui/react'
import TaskTable from './components/task-table'

const ReactTable = () => {
  return (
    <Box maxW={'fit-content'} mx="auto" fontSize="sm">
      <Heading mb={10}>TanStack Table</Heading>
      <TaskTable />
    </Box>
  )
}

export default ReactTable
