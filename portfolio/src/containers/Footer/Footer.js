import { Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { SiGithub, SiLinkedin } from 'react-icons/si'
import { useNavigate } from 'react-router-dom'
import IconCircle from '../../components/IconCircle'
// import { BsGithub } from 'react-icons/bs'

const FooterBar = (props) => {
  const navigate = useNavigate()

  const scrollUpThenGoTo = (to) => {
    console.log('scrolling')
    window.scroll({
      top: 0,
      behavior: 'smooth'
    }) 
    setTimeout(() => {
      navigate(to)
    }, 100);
  }

  return (
    <footer className='footer'>
      <Paper
        elevation={8}
        square
        sx={{
          width: '100%',
          height: '100%',
          backgroundColor: '#4A4A48',
          // textAlign: 'center',
          color: '#D8DAD3',
        }}>
        <Grid container justifyContent={'center'} sx={{ padding: '1rem' }}>
          <Grid
            container
            spacing={1}
            item
            xs={4}
            sm={3}
            mr={2}
            justifyContent={'center'}
            sx={{ paddingBottom: '0.5rem', textAlign: 'center' }}>
            <Grid item xs={12}>
              <Typography variant='caption' sx={{}}>
                Socials:
              </Typography>
            </Grid>
            <Grid item xs={6} sm={6} md={3}>
              <Typography
                variant='caption'
                sx={{
                  display: 'flex',
                  justifyContent: 'end',
                }}>
                <a
                  style={{
                    color: '#A4C2A5',
                  }}
                  href='https://github.com/JonathanBedoy'
                  target='_blank'
                  rel='noreferrer'>
                  <IconCircle
                    height={'2.5rem'}
                    color={'#171515'}
                    backgroundColor='#F1F2EB'
                    hoverColor='#D8DAD3'
                    iconComponent={<SiGithub />}></IconCircle>
                </a>
              </Typography>
            </Grid>
            <Grid item xs={6} sm={6} md={3}>
              <Typography
                variant='caption'
                sx={{
                  display: 'flex',
                  justifyContent: 'start',
                }}>
                <a
                  style={{
                    color: '#A4C2A5',
                  }}
                  href='https://www.linkedin.com/in/jonathanbedoy/'
                  target='_blank'
                  rel='noreferrer'>
                  <IconCircle
                    height={'2.5rem'}
                    color={'#0077B5'}
                    backgroundColor='#F1F2EB'
                    hoverColor='#D8DAD3'
                    iconComponent={<SiLinkedin />}></IconCircle>
                </a>
              </Typography>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={1}
            item
            xs={4}
            sm={3}
            justifyContent={'center'}
            sx={{ paddingBottom: '0.5rem', textAlign: 'center', borderLeft: '1px solid #D8DAD3' }}>
            <Grid item xs={12}>
              <Typography variant='caption' sx={{}}>
                Contact Me:
              </Typography>
            </Grid>
            <Grid item xs={6} sm={6} md={3}>
              <Typography
                variant='caption'
                sx={{
                  display: 'flex',
                  justifyContent: 'end',
                }}>
                <span
                  style={{
                    color: '#A4C2A5',
                  }}
                  onClick={() => scrollUpThenGoTo('/contact')}
                  >
                  <IconCircle
                    height={'2.5rem'}
                    color={'#4A4A48'}
                    backgroundColor='#F1F2EB'
                    hoverColor='#D8DAD3'
                    iconComponent={<MdEmail />}></IconCircle>
                </span>
              </Typography>
            </Grid>
            <Grid item xs={6} sm={6} md={3}>
              <Typography
                variant='caption'
                sx={{
                  display: 'flex',
                  justifyContent: 'start',
                }}>
                <span
                  style={{
                    color: '#A4C2A5',
                  }}
                  onClick={() => scrollUpThenGoTo('/contact')}>
                  <IconCircle
                    height={'2.5rem'}
                    color={'#4A4A48'}
                    backgroundColor='#F1F2EB'
                    hoverColor='#D8DAD3'
                    iconComponent={<FaPhoneAlt />}></IconCircle>
                </span>
              </Typography>
            </Grid>
          </Grid>

          <Grid container item xs={12} justifyContent='center' sx={{ textAlign: 'center' }}>
            <Grid item xs={6}>
              <Typography variant='caption' sx={{}}>
                Made by Jonathan Bedoy
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </footer>
  )
}

export default FooterBar
