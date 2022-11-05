 import { Card,CardContent,Grid } from "@mui/material";
import React from "react";

export const DisplayItem=({item,fields})=>{
    return(
        <React.Fragment>
              {
                fields.map(fld=>
                    <Grid item xs={12/fields.length}>
                        <Card sx={{bgcolor:"aqua"}}>
                            <CardContent>{item[fld]}</CardContent>
                        </Card>
                    </Grid>
                    )
              }
        </React.Fragment>
    )
}