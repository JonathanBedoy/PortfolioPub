import React, { useState } from 'react'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import GitHubIcon from '@mui/icons-material/GitHub'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import LinkIcon from '@mui/icons-material/Link'
// import { Divider } from '@mui/material'
import IconChip from '../IconChip/IconChip'
import { Accordion, AccordionDetails, AccordionSummary, Divider } from '@mui/material'

const ProjectCardWrapper = ({
  name,
  description,
  websiteLink,
  githubRepoLink,
  img,
  imagAlt,
  chips,
  teaser,
}) => {
  const [accordianOpen, setAccordianOpen] = useState(false)

  const accordianHandler = (stateOfAcc, expanded) => {
    // console.log(expanded)
    setAccordianOpen(expanded)
  }

  return (
    <Paper
      square
      elevation={3}
      sx={{
        backgroundColor: '#F1F2EB',
        minHeight: '18rem',
      }}>
      <Grid item container direction='row' justifyContent='center'>
        <Grid item xs={12} sm={12} md={6}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'top',
              justifyContent: 'center',
              width: '100%',
              transition: 'all .2s ease-in-out',
              height: {
                xs: '100%',
                // md: accordianOpen ? '40rem' : '18rem',
                // lg: accordianOpen ? '40rem' : '18rem',
                // xl: accordianOpen ? '40rem' : '18rem',
              },
              backgroundColor: '#F1F2EB',
              overflow: 'hidden',
              textAlign: {
                xs: 'center',
                sm: 'left',
                md: 'left',
                lg: 'left',
                xl: 'left',
              },
            }}>
            <Paper
              square
              elevation={2}
              sx={{
                p: 0,
                m: 0,
                width: 'auto',
                height: 'auto',
              }}>
              <img
                style={{
                  objectFit: 'cover',
                  flexShrink: '0',
                  width: '100%',
                  // minWidth: '100%',
                  height: '100%',
                }}
                src={img}
                alt={imagAlt}
              />
            </Paper>
          </Box>
        </Grid>
        <Grid container item direction={'column'} xs={12} sm={12} md={6}>
          <Box
            sx={{
              width: '100%',
              transition: 'all .2s ease-in-out',
              height: {
                // md: accordianOpen ? '35rem' : '18rem'
              },
              backgroundColor: '',
              overflow: 'hidden',
            }}>
            <Box
              sx={{
                width: '100%',
                transition: 'all .2s ease-in-out',
                height: {
                  // md: accordianOpen ? '35rem' : '18rem'
                },
                // height: accordianOpen ? '28.5rem' : '11.5rem', //'70%',
                backgroundColor: '#F1F2EB',
                overflow: 'hidden',
              }}>
              <Grid item xs={12}>
                <Typography
                  variant=''
                  pt={3}
                  px={3}
                  pb={1}
                  component='h2'
                  sx={{
                    color: '#4A4A48',
                  }}>
                  {name}
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sx={{
                  height: '100%',
                }}>
                <Accordion
                  onChange={accordianHandler}
                  square
                  elevation={0}
                  sx={{
                    backgroundColor: '#F1F2EB',
                    // height: accordianOpen ? '10%' : '70%',
                    transition: 'all .2s ease-in-out',
                  }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel1a-content'
                    id='panel1a-header'
                    sx={{
                      // backgroundColor: 'red',
                      transition: 'all .2s ease-in-out',
                      mb: 0,
                      px: 3,
                      height: accordianOpen ? '5rem' : '9rem',
                    }}>
                    <Typography
                      paragraph
                      variant='body1'
                      component='h2'
                      sx={{
                        transition: 'all .2s ease-in-out',
                        mb: 0,
                        fontFamily: 'monospace',
                        color: '#4A4A48',
                      }}>
                      {teaser}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Divider />
                    <Typography
                      paragraph
                      variant='body2'
                      pt={2}
                      sx={{
                        fontFamily: 'monospace',
                      }}>
                      {description.split('\n').map((line, i) => 
                        <span key={i}>{line}<br/></span>
                      )}
                      {/* This e-commerce website allows the user to add eyelash extesnions to their cart and checkout using PayPal. Along with being able to take a prfound look at the eyelash being sold.
                      This single-page applictation was built using VueJs as the front end JavaScript framework and styled using Bootstrap components. The back end serves the web app using express hosted on a AWS Lightsail Instance. As well as using NeDB as a MongoDB-like database. */}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            </Box>
            <Divider />
            <Box
              sx={{
                my: 0,
                py: 0,
                width: '100%',
                height: '2.5rem', //'13%',
                backgroundColor: '#F1F2EB',
                overflow: 'hidden',
              }}>
              <Grid
                item
                xs={12}
                container
                direction='row'
                justifyContent='center'
                // alignItems='center'
                sx={{
                  my: 0,
                  py: 0,
                  height: '100%',
                }}>
                {chips.map((ele) => {
                  return <IconChip key={ele.name} icon={ele.name} title={ele.description} />
                })}
              </Grid>
            </Box>
            <Divider />
            <Box
              sx={{
                width: '100%',
                height: '4rem',
                backgroundColor: '#F1F2EB',
                overflow: 'hidden',
              }}>
              {/* <Divider sx={{ my: 0, py: 0, backgroundColor: '#F1F2EB' }} /> */}
              <Grid
                item
                xs={12}
                container
                direction='row'
                display={'flex'}
                justifyContent='space-around'
                alignItems='center'
                sx={{
                  my: 0,
                  py: 0,
                  height: '100%',
                }}>
                <Grid
                  item
                  container
                  direction='row'
                  display={'flex'}
                  justifyContent='space-around'
                  xs={6}>
                  <Button
                    disabled={githubRepoLink ? false : true}
                    href={githubRepoLink}
                    target='_blank'
                    variant='contained'
                    sx={{
                      '&:hover': {
                        backgroundColor: '#5A875B',
                      },
                      backgroundColor: '#6C9D6E',
                      color: '#F1F2EB',
                    }}
                    startIcon={<GitHubIcon />}>
                    Github
                  </Button>
                </Grid>
                <Grid
                  item
                  container
                  direction='row'
                  display={'flex'}
                  justifyContent='space-around'
                  xs={6}>
                  <Button
                    disabled={websiteLink ? false : true}
                    href={websiteLink}
                    target='_blank'
                    variant='contained'
                    sx={{
                      '&:hover': {
                        backgroundColor: '#5A875B',
                      },
                      backgroundColor: '#6C9D6E',
                      color: '#F1F2EB',
                    }}
                    startIcon={<LinkIcon />}>
                    Website
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Paper>
    //</Grid>
  )
}

export default ProjectCardWrapper
