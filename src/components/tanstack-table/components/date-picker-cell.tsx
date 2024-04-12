/* eslint-disable @typescript-eslint/no-explicit-any */
import { DataTableType } from '@/data/data'
import CalendarIcon from '@/icons/calendar-icon'
import { Box, Center, Icon } from '@chakra-ui/react'
import { Column, Row, Table, TableMeta } from '@tanstack/react-table'
import { MouseEvent, forwardRef } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const DateCustomInput = forwardRef<
  HTMLDivElement,
  { value?: string; onClick?: (e: MouseEvent<HTMLDivElement>) => void; clearDate: () => void }
>(({ value, onClick, clearDate }, ref) => (
  <Center ref={ref} onClick={onClick} cursor="pointer">
    {value ? (
      <>
        {value}
        <Box
          pos="absolute"
          right={3}
          fontSize="md"
          color="red.300"
          onClick={(e) => {
            e.stopPropagation()
            clearDate()
          }}
        >
          &times;
        </Box>
      </>
    ) : (
      <Icon as={CalendarIcon} fontSize="xl" />
    )}
  </Center>
))
const DatePickerCell = ({
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
  const date = getValue()

  const { updateData } = table.options.meta as TableMeta<DataTableType> & { updateData: any }

  return (
    <DatePicker
      wrapperClassName="date-wrapper"
      dateFormat="MMM d"
      selected={date}
      onChange={(date) => updateData(row.index, column.id, date)}
      customInput={<DateCustomInput clearDate={() => updateData(row.index, column.id, null)} />}
    />
  )
}

export default DatePickerCell
