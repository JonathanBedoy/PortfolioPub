import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import IconChip from '../IconChip/IconChip'

const SkillShowCase = ({ skills, skillLabel, labelAlign = 'left', color }) => {
  return (
    <Grid
      container
      sx={{
        pt: 2,
      }}>
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
              backgroundColor: '#F1F2EB',
              width: '100%',
              textAlign: labelAlign,
              borderBottom: '1px solid #000',
              lineHeight: '0.1em',
              // margin: '10px 0 20px',
            }}>
            <span
              style={{
                background: '#F1F2EB',
                margin: '0 10% 0 10%',
                padding: '0 3% 0 3%',
              }}>
              {skillLabel}
            </span>
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box
          sx={{
            backgroundColor: '#F1F2EB',
          }}>
          <Grid container direction='row' justifyContent='left'>
            {skills.map((ele) => {
              return (
                <Grid
                  key={ele.name}
                  item
                  xs={4}
                  sm={3}
                  md={4}
                  lg={3}
                  sx={{
                    textAlign: 'center',
                  }}>
                  <IconChip color={ele.color} size='4rem' label={ele.label} icon={ele.name} />
                </Grid>
              )
            })}
          </Grid>
        </Box>
      </Grid>
    </Grid>
  )
}

export default SkillShowCase
