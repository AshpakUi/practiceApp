import { Grid,Card,CardContent } from "@mui/material";
import React from "react";
import { Display } from "../Display/Display";
import { Addcities } from "./Addcities";


export const Cities=()=>{
    return(
        <React.Fragment>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Card>
                    <CardContent>
                <Display collName="cities" fields={["citName"]}/>
                    </CardContent>
                </Card>
                </Grid>

             
           <Grid item xs={6}>
            <Card>
                <CardContent>
                <Addcities/>
                </CardContent>
            </Card>
            </Grid>

            </Grid>
        </React.Fragment>
    )
        
}