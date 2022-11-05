import React from 'react';
import {Grid,Button,TextField} from "@mui/material"
import {Link} from "react-router-dom"

export const Navi = () => {
    return (
        <React.Fragment>
            
            <Grid container>
                <Grid item xs={1}>
                <Link to="/">
                    <Button variant="contained"> Home</Button>
                </Link>
                </Grid>
                <Grid item xs={2}>
              <Link to="/subscribers">
              <Button variant="contained"> subscribers</Button>
              </Link>
                </Grid>
                <Grid item xs={1}>
                <Link to="category" >
                    <Button variant='contained' >
                    category
                    </Button>
                </Link>
                </Grid>
                <Grid item xs={1}>
                <Link to="gender" >
                    <Button variant='contained' >
                    gender
                    </Button>
                </Link>
                </Grid>
                {/* <Grid item xs={1}>
                <Link to="services" >
                    <Button variant='contained' >
                    services
                    </Button>
                </Link>
                </Grid>
                <Grid item xs={1}>
                <Link to="cities" >
                    <Button variant='contained' >
                    cities
                    </Button>
                </Link>
                </Grid>
                <Grid item xs={1}>
                <Link to="provider" >
                    <Button variant='contained' >
                    Provider
                    </Button>
                </Link>
                </Grid> */}
                <Grid item xs={2} >
                <Link to="/registration">
                    <Button variant='contained'>Registration</Button>
                </Link>
                </Grid>
                <Grid item xs={1}>
                    <Link to="/payment">
                        <Button variant='contained' >Payment</Button>
                    </Link>
                </Grid>
                <Grid item xs={1}>
                    <Link to="/product">
                        <Button variant='contained' >Product</Button>
                    </Link>
                </Grid>
                <Grid item xs={1}>
                    <Link to="/practice">
                        <Button variant='contained' >Practice</Button>
                    </Link>
                </Grid>
                <Grid item xs={2}>
                    {
                      localStorage.getItem("username")?
                      <b>{localStorage.getItem("username")}</b>
                      :<TextField label="User Name" variant='outlined' fullWidth onChange={(e)=>localStorage.setItem("username",e.target.value)}/>
                    }
                </Grid>
                  <Grid item xs={1}>
                    <Button variant='contained' onClick={()=>localStorage.clear("username")} >
                        Logout
                    </Button> 
                  </Grid>


            </Grid>
        </React.Fragment>
    );
};

