/* eslint-disable @typescript-eslint/no-explicit-any */
import { DataTableType, STATUSES } from '@/data/data'
import { Box, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { Column, Row, Table, TableMeta } from '@tanstack/react-table'

export const ColorIcon = ({ color, mr, ...props }: { color: string; mr: number }) => (
  <Box w="12px" h="12px" bg={color} mr={mr} borderRadius="3px" {...props} />
)
const StatusCell = ({
  getValue,
  row,
  column,
  table,
}: {
  getValue: any
  row: Row<DataTableType>
  column: Column<DataTableType>
  table: Table<DataTableType>
}) => {
  const { name, color } = getValue() || {}
  const { updateData } = table.options.meta as TableMeta<DataTableType> & { updateData: any }
  return (
    <Menu isLazy offset={[0, 0]} flip={false} autoSelect={false}>
      <MenuButton
        as={MenuButton}
        bg={color || 'transparent'}
        color="gray.900"
        p={1.5}
        textAlign="left"
        width="100%"
        height="100%"
      >
        {' '}
        {name}
      </MenuButton>

      <MenuList>
        <MenuItem onClick={() => updateData(row.index, column.id, null)}>
          <ColorIcon color="red.400" mr={3} />
          <span className="font-semibold text-white"> None</span>
        </MenuItem>
        {STATUSES.map((status) => (
          <MenuItem onClick={() => updateData(row.index, column.id, status)} key={status.id}>
            <ColorIcon color={status.color} mr={3} />
            <span className="font-semibold text-white">{status.name}</span>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default StatusCell
