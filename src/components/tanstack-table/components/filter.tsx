import SearchIcon from '@/icons/search-icon'
import { HStack, Icon, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { ColumnFilter } from '@tanstack/react-table'
import React, { Dispatch } from 'react'
import PopoverFilter from './popover-filter'

const Filter = ({
  columnFilters,
  setColumnFilters,
}: {
  columnFilters: ColumnFilter[]
  setColumnFilters: Dispatch<React.SetStateAction<ColumnFilter[]>>
}) => {
  const taskName = columnFilters.find((f) => f.id === 'task')?.value || ''
  const onFilterChange = (id: string, value: unknown) =>
    setColumnFilters((prev) =>
      prev
        .filter((f) => f.id !== id)
        .concat({
          id,
          value,
        }),
    )
  return (
    <HStack mb={6} spacing={3}>
      <InputGroup size="sm" maxW="12rem">
        <InputLeftElement pointerEvents="none">
          <Icon as={SearchIcon} />
        </InputLeftElement>
        <Input
          type="text"
          variant="filled"
          placeholder="Task name"
          borderRadius={5}
          value={taskName as string}
          onChange={(e) => onFilterChange('task', e.target.value)}
        />
      </InputGroup>
      <PopoverFilter columnFilters={columnFilters} setColumnFilters={setColumnFilters} />
    </HStack>
  )
}

export default Filter
