import { Grid,Card,CardContent } from "@mui/material";
import React from "react";
import { Display } from "../Display/Display";
import { AddGender } from "./AddGender";


export const Gender=()=>{
    return(
        <React.Fragment>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Card>
                    <CardContent>
                <Display collName="genders" fields={["genName"]}/>
                    </CardContent>
                </Card>
                </Grid>

             
           <Grid item xs={6}>
            <Card>
                <CardContent>
                <AddGender/>
                </CardContent>
            </Card>
            </Grid>

            </Grid>
        </React.Fragment>
    )
        
}