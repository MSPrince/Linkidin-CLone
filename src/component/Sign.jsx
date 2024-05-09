import { Grid } from '@mui/material'
import React from 'react'
import linkidin from "..//images/linkedin.png"

function Sign() {
  return (
    <div>
      <Grid container>
        <Grid item xs={6}>
           <img src={linkidin} alt="" srcset="" style={{width:'130px'}}/>
        </Grid>

        <Grid item xs={6}>
            image
        </Grid>
      </Grid>
    </div>
  )
}

export default Sign;
