import React from "react";
import { Card,CardContent,Grid,Button,TextField } from "@mui/material";

export const Payment=()=>{
    return(
        <React.Fragment>
          <Card>
            <CardContent>
                <Grid container spacing={3}>
                    <Grid item xs={3}> Full Name:</Grid>
                    <Grid item xs={9}>
                        <h1>
                        {sessionStorage.getItem("firstname")}{" "}
                         {sessionStorage.getItem("lastname")}
                        </h1>
                        </Grid>

                    
                    <Grid item xs={3}>
                        Payment
                        </Grid>
                    <Grid item xs={9}>
                        <TextField label="Payment " variant="outlined" fullWidth/>
                    </Grid>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={3} >
                        <Button variant="contained" >Submit</Button>
                    </Grid>
                    <Grid item xs={3} >
                        <Button variant="contained" >Cancle</Button>
                    </Grid>


                </Grid>
            </CardContent>
          </Card>
        </React.Fragment>
    )
}