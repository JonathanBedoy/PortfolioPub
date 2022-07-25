import { Grid, Typography } from "@mui/material";
import React from "react";
import IconCircle from "../IconCircle";

const ContactModule = ({iconComponent, title, caption, children}) => {
  return (
    <Grid container item xs={12} sm={5} md={4} lg={3} xl={2} sx={{}}>
      <Grid container direction='row' justifyContent='center' alignItems='center' sx={{}}>
        <IconCircle iconComponent={iconComponent} />
      </Grid>
      <Grid item xs={12}>
        <Typography
          variant='h5'
          textAlign={'center'}
          component={'h1'}
          sx={{
            pt: 1,
            fontWeight: '600',
            letterSpacing: '-.07rem',
          }}>
          {title}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography
          variant='overline'
          textAlign={'center'}
          component={'h4'}
          sx={{
            pt: 1,
            fontWeight: '700',
            letterSpacing: '-0.02rem',
          }}>
          {caption}
          {children}
        </Typography>
        
      </Grid>
    </Grid>
  )
}

export default ContactModule