import { Grid, Paper, Typography } from '@mui/material'
import React from 'react'
// import { ImLocation2 } from 'react-icons/im'
// import { FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import ContactModule from '../../components/Contact/ContactModule'
import { SiGithub, SiLinkedin } from 'react-icons/si'

const Contact = (props) => {
  return (
    <Grid container direction={'row'} justifyContent='center'>
      <Grid item xs={12} md={9} sx={{ backgroundColor: '' }}>
        <Paper
          elevation={1}
          square
          sx={{
            p: 5,
            // width: '100%',
            height: {
              xs: '100%',
              md: 'auto',
            },
            backgroundColor: '#A4C2A5',
          }}>
          <Grid
            item
            xs={12}
            pb={4}
            sx={
              {
                // color: '#4A4A48',
              }
            }>
            <Typography
              variant='h4'
              textAlign={'center'}
              component={'h1'}
              sx={{
                fontWeight: '500',
              }}>
              Contact
            </Typography>
          </Grid>
          <Grid
            container
            item
            xs={12}
            textAlign='center'
            spacing={5}
            justifyContent='space-around'
            sx={{
              color: '#4A4A48',
            }}>
            {/* <ContactModule
              iconComponent={<ImLocation2 />}
              title={'ADDRESS'}
              caption={'Southern California'}></ContactModule> */}
            {/* <ContactModule
              iconComponent={<FaPhoneAlt />}
              title={'PHONE'}
              caption={''}
            /> */}
            <ContactModule iconComponent={<SiGithub />} title={'GitHub'} caption={''}>
              <a
                style={{
                  color: '#4A4A48',
                }}
                href='https://github.com/JonathanBedoy'>
                github.com
              </a>
            </ContactModule>
            <ContactModule iconComponent={<SiLinkedin />} title={'LinkedIn'} caption={''}>
              <a
                style={{
                  color: '#4A4A48',
                }}
                href='https://www.linkedin.com/in/jonathan-bedoy-65a7b8175/'>
                linkedin.com
              </a>
            </ContactModule>
            <ContactModule iconComponent={<MdEmail />} title={'E-MAIL'} caption={''}>
              <a
                style={{
                  color: '#4A4A48',
                }}
                href='mailto:jonathanbedoy1@gmail.com?subject=%20From%20Portfolio'>
                jonathanbedoy1@gmail.com
              </a>
            </ContactModule>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Contact
