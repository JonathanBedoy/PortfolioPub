import React, { useEffect, useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import { Divider, Grid } from '@mui/material'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AiOutlineDownload } from 'react-icons/ai'
import styles from './NavBar.module.css'

// const pages = ['Portfolio', 'About Me', 'Contact']
const pages = [
  {name: 'Portfolio', location: ''},
  {name: 'About Me', location: 'aboutme'},
  {name: 'Contact', location: 'contact'},
]
// const customPage = 'Resume'
const resumeDownload = {name: 'Resume', location: 'assets/resume.pdf'}

const ResponsiveAppBar = (props) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [anchorElNav, setAnchorElNav] = useState(null)
  const [currRoute, setCurrRoute] = useState(location.pathname.replace('/', ''))
  const [logoToShow] = useState('assets/JBLogo.png')
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  useEffect(() => {
    // console.log(location.pathname.replace('/', ''))
    setCurrRoute(location.pathname.replace('/', ''))
  }, [location])

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  // const currRoute = 'aboutme'

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  })

  const navBarGo = (newLink) => {
    // setTimeout(() => {
    navigate(`/${newLink}`, { replace: false })
    handleCloseNavMenu()
    // }, 100);
  }
  // console.log(trigger)

  // useEffect(() => {
  //   setTimeout(() => {
  //     if (trigger) setLogoToShow('assets/jonathanlogo.png')
  //     else setLogoToShow('assets/JBLogo.png')
  //   }, 280)
  // }, [trigger])

  const heightOfNavBar = 3.5

  return (
    <AppBar
      className='headers'
      position='static'
      sx={{
        backgroundColor: '#566246',
        color: '#D8DAD3',
        transition: 'all 2s ease-in-out',
      }}>
      <Container maxWidth='xl'>
        <Toolbar>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              height: heightOfNavBar+'rem',
              mr: 5,
              transition: 'all 3s ease-in-out',
            }}>
            <img className={styles.navBarLogo} onClick={() => navBarGo('')} height='70%' width='auto' src='/assets/JBLogo.png' alt='Jonathan Bedoy Logo' />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              sx={{
                color: '#F1F2EB',
              }}>
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              PaperProps={{
                style: {
                  backgroundColor: '#566246',
                },
              }}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}>
              {pages.map((page) => (
                <div key={page.name}>
                  <Divider sx={{ my: 0.5 }} />
                  <MenuItem
                    key={page.name}
                    onClick={() => navBarGo(page.location)}
                    sx={{ textAlign: 'center' }}>
                    <Typography
                      textAlign='center'
                      sx={{
                        color: '#F1F2EB',
                        transform:
                          page.location === currRoute ? 'scale(1.1)' : '',
                        fontWeight: page.location === currRoute ? '700' : '',
                        textDecoration:
                          page.location === currRoute ? '' : '',
                      }}>
                      {page.name}
                    </Typography>
                  </MenuItem>
                </div>
              ))}
              <div key={resumeDownload.name}>
                <Divider sx={{ my: 0.5 }} />
                <MenuItem sx={{ textAlign: 'center' }}>
                  <Link
                    target='_blank'
                    to={resumeDownload.location}//'assets/JBLogo.png'
                    download
                    as={Link}
                    key={resumeDownload.name}
                    style={{
                      my: 2,
                      mr: 2,
                      transition: 'all .2s ease-in-out',
                      transform: '',
                      textDecoration: 'none',
                      color: '#F1F2EB',
                      display: 'block',
                      // fontSize: page === 'Portfolio' ?  '1rem' : '.9rem',
                      fontFamily: 'monospace',
                      fontWeight: '700',
                      letterSpacing: '.1rem',
                    }}>
                    {resumeDownload.name} <AiOutlineDownload />
                  </Link>
                </MenuItem>
              </div>
              <Divider sx={{ my: 0.5 }} />
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
              pt: 1,
              height: trigger ? heightOfNavBar+'rem' : heightOfNavBar+'rem',
              transition: 'all .2s ease-in-out',
            }}>
            {/* {trigger ? (
              <Typography
                // variant='h5'
                noWrap
                component='a'
                href=''
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}>
                JB
              </Typography>
            ) : ( */}
            <img className={styles.navBarLogo} onClick={() => navBarGo('')} height='70%' width='auto' src={logoToShow} alt='Jonathan Bedoy Logo' />
            {/* )} */}
          </Box>
          {/* JB </Typography> */}
          <Box sx={{ ml: 5, flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={() => navBarGo(page.location)}
                sx={{
                  my: 2,
                  mr: 2,
                  transition: 'all .2s ease-in-out',
                  transform: page.location === currRoute ? 'scale(1.17)' : '',
                  textDecoration:
                    page.location === currRoute ? '' : 'none',
                  color: '#F1F2EB',
                  display: 'block',
                  // fontSize: page === 'Portfolio' ?  '1rem' : '.9rem',
                  fontFamily: 'monospace',
                  fontWeight: '700',
                  letterSpacing:
                    page.location === currRoute ? '.11rem' : '.1rem',
                }}>
                {page.name}
              </Button>
            ))}
          </Box>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              height: heightOfNavBar+'rem',
              mr: 5,
              transition: 'all 3s ease-in-out',
            }}>
            <Grid container display='flex' alignContent={'center'} justifyContent='center'>
              <Link
                target='_blank'
                to={resumeDownload.location}//'assets/JBLogo.png'
                download
                as={Link}
                key={resumeDownload.name}
                style={{
                  my: 2,
                  mr: 2,
                  transition: 'all .2s ease-in-out',
                  transform: '',
                  textDecoration: 'none',
                  color: '#F1F2EB',
                  display: 'block',
                  // fontSize: page === 'Portfolio' ?  '1rem' : '.9rem',
                  fontFamily: 'monospace',
                  fontWeight: '700',
                  letterSpacing: '.1rem',
                }}>
                {resumeDownload.name} <AiOutlineDownload />
              </Link>
            </Grid>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default ResponsiveAppBar
