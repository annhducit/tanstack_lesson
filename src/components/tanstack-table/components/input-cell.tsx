/* eslint-disable @typescript-eslint/no-explicit-any */
import { DataTableType } from '@/data/data'
import { Input } from '@chakra-ui/react'
import { Column, Row, Table, TableMeta } from '@tanstack/react-table'
import { useEffect, useState } from 'react'

const EditInput = ({
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
  const initialValue = getValue()
  const [value, setValue] = useState(initialValue)

  const { updateData } = table.options.meta as TableMeta<DataTableType> & { updateData: any }
  const onBlur = () => {
    updateData(row.index, column.id, value)
  }

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  return (
    <Input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onBlur={onBlur}
      variant="filled"
      size="sm"
      w="85%"
      overflow="hidden"
      textOverflow="ellipsis"
      whiteSpace="nowrap"
    ></Input>
  )
}

export default EditInput
