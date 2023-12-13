import Stack from '@mui/joy/Stack';
import { Box, Paper } from '@mui/material';
import Skeleton from '@mui/joy/Skeleton';
import { iseLogo } from '../../Assets/Images';
import classes from './TutorDashboardLoadingScreenMobile.module.css'


const TutorDashboardLoadingScreenMobile = () => {
  return (
    <>
      <div className={classes.container}>
        <Box display="flex" flexDirection="row" gap={5} sx={{ height: "100vh", overflow: 'auto' }}>
          <Stack sx={{ width: '100%', borderLeft: '1px solid #e0e0e0', height: "100vh", overflow: 'auto' }}>
            <Box sx={{
              width: '100%',
              display: 'flex',
              overflow: 'auto',
              background: '#FFF',
            }}>
              <header className={classes.header}>
                <img src={iseLogo} alt="Ise Logo" className={classes.logo} />
              </header>
            </Box>
            <Box sx={{
              width: '100%',
              height: '100%',
              display: 'flex',
              overflow: 'auto',
              background: '#F1F1F1',
              flexDirection: 'column',
            }}
            >
              <Box display="flex" flexDirection="column" alignItems="flex-start" gap={2} sx={{ height: '100vh', overflow: 'auto', padding: '2em 1em' }}>
                <Paper sx={{
                  gap: '1em',
                  width: '100%',
                  height: '100%',
                  padding: '2em',
                  display: 'flex',
                  overflow: 'auto',
                  background: '#FFF',
                  flexDirection: 'column',
                }}
                >
                  <Skeleton animation="wave" variant="rectangular" width='80vw' height='100%'></Skeleton>
                  <Skeleton animation="wave" variant="rectangular" width='80vw' height='100%'></Skeleton>
                </Paper>
              </Box>
              <Box display="flex" flexDirection="column" alignItems="flex-start" gap={2} sx={{ height: '100vh', overflow: 'auto', padding: '2em 1em' }}>
                <Paper sx={{
                  gap: '1em',
                  width: '100%',
                  height: '100%',
                  padding: '2em',
                  display: 'flex',
                  overflow: 'auto',
                  background: '#FFF',
                  flexDirection: 'column',
                }}
                >
                  <Skeleton animation="wave" variant="rectangular" width='80vw' height='100%'></Skeleton>
                  <Skeleton animation="wave" variant="rectangular" width='80vw' height='100%'></Skeleton>
                </Paper>
              </Box>
              <Box display="flex" flexDirection="column" alignItems="flex-start" gap={2} sx={{ height: '100vh', overflow: 'auto', padding: '2em 1em' }}>
                <Paper sx={{
                  gap: '1em',
                  width: '100%',
                  height: '100%',
                  padding: '2em',
                  display: 'flex',
                  overflow: 'auto',
                  background: '#FFF',
                  flexDirection: 'column',
                }}
                >
                  <Skeleton animation="wave" variant="rectangular" width='80vw' height='100%'></Skeleton>
                  <Skeleton animation="wave" variant="rectangular" width='80vw' height='100%'></Skeleton>
                </Paper>
              </Box>
            </Box>
          </Stack>
        </Box>
      </div>
    </>
  )
}

export default TutorDashboardLoadingScreenMobile
