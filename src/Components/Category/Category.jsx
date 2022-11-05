import { Grid,Card,CardContent } from "@mui/material";
import React from "react";
import { Display } from "../Display/Display";
import { CategoryAdd } from "../subscribers/CategoryAdd";


export const Category=()=>{
    return(
        <React.Fragment>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Card>
                    <CardContent>
                <Display collName="categories" fields={["catName"]}/>
                    </CardContent>
                </Card>
                </Grid>

             
           <Grid item xs={6}>
            <Card>
                <CardContent>
                <CategoryAdd/>
                </CardContent>
            </Card>
            </Grid>

            </Grid>
        </React.Fragment>
    )
        
}