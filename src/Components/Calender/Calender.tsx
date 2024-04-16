import { DateCalendar } from '@mui/x-date-pickers'
import dayjs from 'dayjs'
import classes from './Calender.module.css'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles'

const StyledDateCalendar = styled(DateCalendar)(({ theme }) => ({
  '& .MuiPickersCalendar-weekDayLabel': {
    color: '#ffffff',
  },
  '& .MuiPickersDay-day': {
    color: '#ffffff',
  },
}))

const theme = createTheme()

const Calender = () => {
  return (
    <div className={classes.container}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ThemeProvider theme={theme}>
          <StyledDateCalendar
            defaultValue={dayjs('2023-01-29')}
            fixedWeekNumber={6}
            showDaysOutsideCurrentMonth
            views={['year', 'month', 'day']}
          />
        </ThemeProvider>
      </LocalizationProvider>
    </div>
  )
}

export default Calender
