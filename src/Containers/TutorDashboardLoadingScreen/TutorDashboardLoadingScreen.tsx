import Stack from '@mui/joy/Stack';
import { Box } from '@mui/material';
import Skeleton from '@mui/joy/Skeleton';
import Typography from '@mui/joy/Typography';
import CardContent from '@mui/joy/CardContent';
import AspectRatio from '@mui/joy/AspectRatio';
import classes from './TutorDashboardLoadingScreen.module.css'

const TutorDashboardLoadingScreen = () => {
  return (
    <>
      <div className={classes.container}>
        <Box display="flex" flexDirection="row" gap={2} sx={{ height: "100vh", overflow: 'auto' }}>
          <Stack paddingTop={2} paddingBottom={2} paddingLeft={4} sx={{ height: "100vh", width: '250px', overflow: 'auto' }}>
            <div>
              <Box sx={{ marginBottom: 10 }}>
                <Skeleton
                  animation="wave"
                  variant="text"
                  level="body-sm"
                />
              </Box>
              <Box display="flex" flexDirection="column" gap={6}>
                <CardContent orientation="horizontal">
                  <div>
                    <Skeleton animation="wave" variant="circular" width={15} height={15} />
                  </div>
                  <Box width='100%' marginLeft={2}>
                    <Skeleton animation="wave" variant="text" sx={{ width: '100%', height: 15 }}>
                      Read more
                    </Skeleton>
                  </Box>
                </CardContent>
                <CardContent orientation="horizontal">
                  <div>
                    <Skeleton animation="wave" variant="circular" width={15} height={15} />
                  </div>
                  <Box width='100%' marginLeft={2}>
                    <Skeleton animation="wave" variant="text" sx={{ width: '100%', height: 15 }}>
                      Read more
                    </Skeleton>
                  </Box>
                </CardContent>
                <CardContent orientation="horizontal">
                  <div>
                    <Skeleton animation="wave" variant="circular" width={15} height={15} />
                  </div>
                  <Box width='100%' marginLeft={2}>
                    <Skeleton animation="wave" variant="text" sx={{ width: '100%', height: 15 }}>
                      Read more
                    </Skeleton>
                  </Box>
                </CardContent>
                <CardContent orientation="horizontal">
                  <div>
                    <Skeleton animation="wave" variant="circular" width={15} height={15} />
                  </div>
                  <Box width='100%' marginLeft={2}>
                    <Skeleton animation="wave" variant="text" sx={{ width: '100%', height: 15 }}>
                      Read more
                    </Skeleton>
                  </Box>
                </CardContent>
                <CardContent orientation="horizontal">
                  <div>
                    <Skeleton animation="wave" variant="circular" width={15} height={15} />
                  </div>
                  <Box width='100%' marginLeft={2}>
                    <Skeleton animation="wave" variant="text" sx={{ width: '100%', height: 15 }}>
                      Read more
                    </Skeleton>
                  </Box>
                </CardContent>
                <CardContent orientation="horizontal">
                  <div>
                    <Skeleton animation="wave" variant="circular" width={15} height={15} />
                  </div>
                  <Box width='100%' marginLeft={2}>
                    <Skeleton animation="wave" variant="text" sx={{ width: '100%', height: 15 }}>
                      Read more
                    </Skeleton>
                  </Box>
                </CardContent>
              </Box>
            </div>
            <div>
              <Box marginTop={17}>
                <CardContent orientation="horizontal">
                  <div>
                    <Skeleton animation="wave" variant="circular" width={15} height={15} />
                  </div>
                  <Box width='100%' marginLeft={2}>
                    <Skeleton animation="wave" variant="text" sx={{ width: '100%', height: 15 }}>
                      Read more
                    </Skeleton>
                  </Box>
                </CardContent>
              </Box>
            </div>
          </Stack>
          <Stack sx={{ width: '100%', borderLeft: '1px solid #e0e0e0', height: "100vh", overflow: 'auto' }}>
            <Box sx={{
              width: '100%',
              height: '10vh',
              display: 'flex',
              overflow: 'auto',
              background: '#FFF',
            }}></Box>
            <Box sx={{
              width: '100%',
              height: '100%',
              display: 'flex',
              overflow: 'auto',
              background: '#F1F1F1',
            }}
            >
              <Box display="flex" flexDirection="column" gap={5} sx={{ height: '100%', overflow: 'auto', flex: 1, padding: '4em 1em' }}>
                <Box display="flex" flexDirection="column" gap={2}>
                  <Typography sx={{ overflow: 'hidden', height: '1em' }}>
                    <Skeleton animation="wave">
                      publishing industries. publishing.
                    </Skeleton>
                  </Typography>
                  <AspectRatio ratio="21/4">
                    <Skeleton animation="wave" variant="overlay">
                      <img
                        alt=""
                        src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                      />
                    </Skeleton>
                  </AspectRatio>
                  <AspectRatio ratio="21/4">
                    <Skeleton animation="wave" variant="overlay">
                      <img
                        alt=""
                        src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                      />
                    </Skeleton>
                  </AspectRatio>
                </Box>
                <Box>
                  <Typography sx={{ overflow: 'hidden' }}>
                    <Skeleton animation="wave" sx={{ width: '100%' }}>
                      Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industry.
                    </Skeleton>
                  </Typography>
                </Box>
                <Box display="flex" flexDirection="column" gap={2}>
                  <Typography sx={{ overflow: 'hidden', height: '1em' }}>
                    <Skeleton animation="wave">
                      publishing industries. publishing.
                    </Skeleton>
                  </Typography>
                  <AspectRatio ratio="21/4">
                    <Skeleton animation="wave" variant="overlay">
                      <img
                        alt=""
                        src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                      />
                    </Skeleton>
                  </AspectRatio>
                  <AspectRatio ratio="21/4">
                    <Skeleton animation="wave" variant="overlay">
                      <img
                        alt=""
                        src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                      />
                    </Skeleton>
                  </AspectRatio>
                </Box>
              </Box>
              <Box sx={{ height: '100%', overflow: 'auto', padding: '4em 1em' }}>
                <CardContent orientation="horizontal" sx={{ height: '100%' }}>
                  <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
                    <Skeleton animation="wave" variant="rectangular" width={250} height='20%' />
                    <Skeleton animation="wave" variant="rectangular" width={250} height='50%' />
                    <Skeleton animation="wave" variant="rectangular" width={250} height='30%' />
                  </Box>
                </CardContent>
              </Box>
            </Box>
          </Stack>
        </Box>
      </div>
    </>
  )
}

export default TutorDashboardLoadingScreen
