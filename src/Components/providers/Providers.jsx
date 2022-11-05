import { Grid,Card,CardContent } from "@mui/material";
import React from "react";
import { Display } from "../Display/Display";
import { Addproviders } from "./Addproviders";


export const Providers=()=>{
    return(
        <React.Fragment>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Card>
                    <CardContent>
                <Display collName="providers" fields={["proName"]}/>
                    </CardContent>
                </Card>
                </Grid>

             
           <Grid item xs={6}>
            <Card>
                <CardContent>
                <Addproviders/>
                </CardContent>
            </Card>
            </Grid>

            </Grid>
        </React.Fragment>
    )
        
}