import React from "react";
import { Button, Grid, TextField } from "@mui/material";
import linkedin from "../images/linkedin.png";
import developer from "../images/developer.png"

function Signin() {
  return (
    <div>
      <Grid container>
        <Grid item xs={6} sx={{paddingLeft:"80px", paddingTop:"15px"}}>
          <img src={linkedin} alt="LinkedIn" style={{ width: "130px" }} />
          <div>
            <h2 style={{fontWeight:"100" , fontSize:"60px" , color:"#b26f28"}}>Find jobs through LinkedIn</h2>
            <label htmlFor="username">Enter User Name</label>
            <br />
            <TextField
              variant="outlined"
              label="UserName"
              id="username"
              sx={{ width: "400px", mt: "5px" }}
            />
            <br />
            <Button
              size="large"
              variant="contained"
              sx={{ width: "400px", borderRadius: "50px" }}
            >
              Sign In
            </Button>
          </div>
        </Grid>
        <Grid item xs={6}>
          {/* Placeholder for the image */}
          <img
            src={developer}
            alt="placeholder"
            style={{ width: "100%" }}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default Signin;
