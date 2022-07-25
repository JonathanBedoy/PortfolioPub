import { Grid } from '@mui/material'
import React from 'react'
// import { ImLocation2 } from 'react-icons/im'

const IconCircle = ({ iconComponent, height='6rem', color, backgroundColor, hoverColor }) => {
  return <Grid className='iconCircle' sx={{
    width: height, height, color, backgroundColor, '&:hover': {
      backgroundColor: hoverColor
    }
  }}>{iconComponent}</Grid>
}

export default IconCircle
