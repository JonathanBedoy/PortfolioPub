import { Grid, Paper, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'
import SkillShowCase from '../../components/ShowCase/SkillShowCase'

const AboutMe = (props) => {
  let data = 'Jonathan Bedoy holds a Bachelor of Science in Computer Science from the California State University - Fullerton. He has since been a freelance Full-Stack Web Developer. Designing, developing, and hosting Single Page Application Web Apps, with a REST-ful backend. Such as Nia Lashes By Denise as well as an Invoice Generator. He is always looking for new opportunities, if this sounds interesting, reach out to Jonathan at jonathanbedoy1@gmail.com. '
  return (
    <Container>
      <Grid
        container
        spacing={2}
        direction='row'
        justifyContent='center'
        paddingTop={2}
        sx={{
          height: {
            // xs: '65rem',
            // sm: '80rem'
          },
        }}>
        {/*vvvvv About Me goes Here vvvvv */}
        <Grid item xs={10} sm={10} md={6} lg={5}>
          <Paper
            sx={{
              backgroundColor: '#F1F2EB',
              // height: '30%'
            }}>
            {/* <RiVuejsFill />
            <SiMongodb />
            <BsFillBootstrapFill /> */}

            <Grid container direction='row' justifyContent='center'>
              <Grid item xs={12}>
                <Box
                  sx={{
                    backgroundColor: '#F1F2EB',
                  }}>
                  <Typography
                    variant=''
                    pt={3}
                    px={3}
                    pb={1}
                    component='h2'
                    sx={{
                      color: '#4A4A48',
                    }}>
                    About Me
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box
                  sx={{
                    backgroundColor: '#F1F2EB',
                  }}>
                  <Typography
                    paragraph
                    variant='body1'
                    component='h2'
                    sx={{
                      p: 3,
                      mb: 0,
                      fontFamily: 'monospace',
                      color: '#4A4A48',
                    }}>
                   {data}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        {/*vvvvv About Me goes Here vvvvv */}
        <Grid item xs={10} sm={10} md={4} lg={4}>
          <Paper
            sx={{
              backgroundColor: '#F1F2EB',
              // height: '65%'
            }}>
            <Grid container direction='row' justifyContent='center'>
              <Grid item xs={12}>
                <Box
                  sx={{
                    backgroundColor: '#F1F2EB',
                  }}>
                  <Typography
                    variant=''
                    pt={3}
                    px={3}
                    pb={1}
                    component='h2'
                    sx={{
                      color: '#4A4A48',
                      textAlign: 'right',
                    }}>
                    Skills
                  </Typography>
                </Box>
              </Grid>
              <SkillShowCase
                // color={'#566246'}
                skillLabel={'Front-End'}
                skills={[
                  {
                    name: 'reactjs',
                    label: 'React Js',
                    color: '#61DBFB',
                  },
                  {
                    name: 'vuejs',
                    label: 'Vue Js',
                    color: '#42b883',
                  },
                  {
                    name: 'bootstrap',
                    label: 'Bootsrap',
                    color: '#563d7c',
                  },
                  {
                    name: 'mui',
                    label: 'Material UI',
                    color: '#007fff',
                  },
                ]}
              />
              <SkillShowCase
                color={'#566246'}
                labelAlign={'right'}
                skillLabel={'Back-End'}
                skills={[
                  {
                    name: 'nodejs',
                    label: 'Node Js',
                    color: '#68A063',
                  },
                  {
                    name: 'socketio',
                    label: 'Socket.IO',
                    color: '#010101',
                  },
                  {
                    name: 'mongodb',
                    label: 'Mongo DB',
                    color: '#4DB33D',
                  },
                  {
                    name: 'sql',
                    label: 'SQL',
                    color: '#00758F',
                  },
                ]}
              />
              <SkillShowCase
                color={'#566246'}
                labelAlign={'left'}
                skillLabel={'Languages'}
                skills={[
                  {
                    name: 'js',
                    label: 'Javascript',
                    color: '#f0db4f',
                  },
                  {
                    name: 'python',
                    label: 'Python',
                    color: '#306998',
                  },
                  {
                    name: 'cplusplus',
                    label: 'C++',
                    color: '#044F88',
                  },
                ]}
              />
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

export default AboutMe
