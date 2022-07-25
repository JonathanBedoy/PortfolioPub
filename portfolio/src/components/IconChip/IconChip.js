import { Grid, IconButton, Tooltip } from '@mui/material'
import React from 'react'
import { RiVuejsFill, RiReactjsFill } from 'react-icons/ri'
import {
  SiGithub,
  SiLinkedin,
  SiSocketdotio,
  SiMongodb,
  SiMaterialui,
  SiJavascript,
  SiPython,
  SiCplusplus,
} from 'react-icons/si'
import { BsFillBootstrapFill } from 'react-icons/bs'
import { AiOutlineConsoleSql } from 'react-icons/ai'
import { FaNodeJs, FaNpm, FaPaypal } from 'react-icons/fa'
const iconBluePrint = {
  vuejs: {
    iconComponent: <RiVuejsFill />,
    description: 'Vue JS',
  },
  reactjs: {
    iconComponent: <RiReactjsFill />,
    description: 'React JS',
  },
  mui: {
    iconComponent: <SiMaterialui />,
    description: 'Material UI',
  },
  js: {
    iconComponent: <SiJavascript />,
    description: 'JavaScript',
  },
  python: {
    iconComponent: <SiPython />,
    description: 'Python',
  },
  cplusplus: {
    iconComponent: <SiCplusplus />,
    description: 'C++',
  },
  mongodb: {
    iconComponent: <SiMongodb />,
    description: 'Mongo DB',
  },
  sql: {
    iconComponent: <AiOutlineConsoleSql />,
    description: 'SQL',
  },
  socketio: {
    iconComponent: <SiSocketdotio />,
    description: 'Socket.IO',
  },
  bootstrap: {
    iconComponent: <BsFillBootstrapFill />,
    description: 'Bootstrap',
  },
  nodejs: {
    iconComponent: <FaNodeJs />,
    description: 'Node JS',
  },//
  npm: {
    iconComponent: <FaNpm />,
    description: 'Node Package Manager',
  },
  paypal: {
    iconComponent: <FaPaypal />,
    description: 'Paypal SDK',
  },
  linkedin: {
    iconComponent: <SiLinkedin />,
    description: 'LinkedIn',
  },
  github: {
    iconComponent: <SiGithub />,
    description: 'Github',
  },
}
const IconChip = ({ icon, title, size, label, color }) => {
  return (
    <Tooltip title={title ? title : iconBluePrint[icon].description}>
      <IconButton>
        <Grid item container direction='row' justifyContent='center'>
          <Grid
            item
            xs={12}
            sx={{
              fontSize: size ? size : '1.5rem',
              padding: 0,
              m: 0,
              color: color,
            }}>
            {iconBluePrint[icon].iconComponent}
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              fontSize: !size ? size : '.7rem',
              p: 0,
              m: 0,
              textDecoration: 'underline',
              margin: '-15px',
            }}>
            {label ? label : ''}
          </Grid>
        </Grid>
        {/* <br /> */}
      </IconButton>
    </Tooltip>
  )
}

export default IconChip
