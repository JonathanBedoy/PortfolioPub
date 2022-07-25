// TODO: add descriptions to all portfolio items
// TODO: landing page? location '/'
// TODO: clean up github repositorys to make them public 
// TODO: update readmes that state how to run and how to work
import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import AboutMe from '../AboutMe/AboutMe'
import Portfolio from '../Portfolio/Portfolio'
import Contact from '../Contact/Contact'
import { Grid } from '@mui/material'

const HomePage = (props) => {
  const location = useLocation()
  return (
    // <div className='content'>
    <Grid
      container
      display='flex'
      justifyContent={'center'}
      className='content'
      sx={{
        p: 0,
        m: 0,
        pb: 2,
      }}>

          <Routes location={location}>
            <Route path='/aboutme' element={<AboutMe />} />
            <Route path='/' element={<Portfolio />} />
            {/* <Route path='/portfolio' element={<Portfolio />} /> */}
            <Route path='/contact' element={<Contact />} />
          </Routes>

      {/* <AboutMe /> */}
      {/* <Portfolio /> */}
    </Grid>
    //</div>
  )
}

export default HomePage
