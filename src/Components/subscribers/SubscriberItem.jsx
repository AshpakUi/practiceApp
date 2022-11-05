import React from "react";
import { Card,CardContent } from "@mui/material";

export const SubscribersItem=({item})=>{
    return(
        <React.Fragment>
            
             <Card sx={{bgcolor:"coral",color:"white"}}>
             <CardContent>
                {item.fname} {item.lname}<br/>
                
             </CardContent>
             </Card>
        </React.Fragment>
    )
}