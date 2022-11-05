import { Grid,Card,CardContent } from "@mui/material";
import React from "react";
import { Display } from "../Display/Display";
import { AddServices } from "./AddServices";


export const Services=()=>{
    return(
        <React.Fragment>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Card>
                    <CardContent>
                <Display collName="services" fields={["serName"]}/>
                    </CardContent>
                </Card>
                </Grid>
           <Grid item xs={6}>
            <Card>
                <CardContent>
                <AddServices/>
                </CardContent>
            </Card>
            </Grid>

            </Grid>
        </React.Fragment>
    )
        
}