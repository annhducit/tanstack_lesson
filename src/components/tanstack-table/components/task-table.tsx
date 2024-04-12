import DATA, { DataTableType } from '@/data/data'
import SortIcon from '@/icons/sort-icon'
import { Box, Button, ButtonGroup, Icon, Text } from '@chakra-ui/react'
import {
  ColumnDef,
  ColumnFilter,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { useState } from 'react'
import { TypeStatus } from '../types'
import DatePickerCell from './date-picker-cell'
import Filter from './filter'
import EditInput from './input-cell'
import StatusCell from './status-cell'

const columnHelper = createColumnHelper<DataTableType>()

const columns: ColumnDef<DataTableType>[] = [
  {
    accessorKey: 'task',
    header: 'Task',
    columns: [
      columnHelper.accessor('task', {
        cell: EditInput,
        enableColumnFilter: true,
        filterFn: 'includesString',
        size: 300,
      }),
    ],
  },
  {
    accessorKey: 'status',
    header: 'Status',
    enableSorting: false,
    columns: [
      columnHelper.accessor('status', {
        cell: StatusCell,
        enableColumnFilter: true,
        filterFn: (row, columnId, filterStatuses) => {
          if (filterStatuses.length === 0) return true
          const status: TypeStatus = row.getValue(columnId)
          return filterStatuses.includes(status?.id)
        },
      }),
    ],
  },
  {
    accessorKey: 'due',
    header: 'Due',
    columns: [
      columnHelper.accessor('due', {
        cell: DatePickerCell,
      }),
    ],
  },
  {
    accessorKey: 'notes',
    header: 'Notes',
    columns: [
      columnHelper.accessor('notes', {
        cell: EditInput,
        size: 300,
      }),
    ],
  },
]
const TaskTable = () => {
  const [columnFilters, setColumnFilters] = useState<ColumnFilter[]>([])
  const [data, setData] = useState<DataTableType[]>(DATA)
  const table = useReactTable({
    data,
    columns,
    state: {
      columnFilters,
    },
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    columnResizeMode: 'onChange',
    meta: {
      updateData: (rowIndex: number, columnId: number, value: string) => {
        setData((prev) =>
          prev.map((row, index) =>
            index === rowIndex
              ? {
                  ...prev[rowIndex],
                  [columnId]: value,
                }
              : row,
          ),
        )
      },
    },
  })
  return (
    <Box className="mb-20">
      <Filter columnFilters={columnFilters} setColumnFilters={setColumnFilters} />
      <Box className="table" w={table.getTotalSize()}>
        <Box className="thead">
          <Box className="tr">
            {table.getHeaderGroups()[0].headers.map((header) => (
              <Box className="th" key={header.id} w={header.getSize()}>
                {flexRender(header.column.columnDef.header, header.getContext())}
                {header.column.getCanSort() && (
                  <Icon as={SortIcon} mx={3} fontSize={14} onClick={header.column.getToggleSortingHandler()} />
                )}
                {header.column.getIsSorted() ? (header.column.getIsSorted() === 'desc' ? ' 🔽' : ' 🔼') : null}
                <Box
                  onMouseDown={header.getResizeHandler()}
                  onTouchStart={header.getResizeHandler()}
                  className={`resizer ${header.column.getIsResizing() ? 'isResizing' : ''}`}
                ></Box>
              </Box>
            ))}
          </Box>
        </Box>
        <Box className="tbody">
          {table.getRowModel().rows.map((row) => (
            <Box className="tr" key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <Box className="td" key={cell.id} w={cell.column.getSize()}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Box>
              ))}
            </Box>
          ))}
        </Box>
      </Box>
      <Text color="white" mt={2} mb={2}>
        Page: {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
      </Text>
      <ButtonGroup size="sm" isAttached variant="outline">
        <Button onClick={() => table.previousPage()} isDisabled={!table.getCanPreviousPage()}>
          {'<'}
        </Button>
        <Button onClick={() => table.nextPage()} isDisabled={!table.getCanNextPage()}>
          {'>'}
        </Button>
      </ButtonGroup>
    </Box>
  )
}

export default TaskTable
