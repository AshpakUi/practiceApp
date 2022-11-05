import React, { useState } from "react";
import { Grid,TextField,Button } from "@mui/material";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

export const Addproviders=()=>{
     const [pro,setPro]=useState("");

     const handleAdd=()=>{
             axios.post("http://localhost:3030/addproviders",{
                proId:uuidv4(),
                proName:pro,
                isActive:true,
             });
             setPro("")
     }
    return(
        <React.Fragment>
            
         <Grid container spacing={3}>
            <Grid item xs={9}>
             <TextField label="Add providers"
              variant="outlined"
              value={pro}
               fullWidth onChange={e=>setPro(e.target.value)}
               />
            </Grid>
            <Grid item sx={3}>
            <Button variant="contained" fullWidth onClick={()=>handleAdd()}>
                Add
                </Button>
            </Grid>

         </Grid>
        </React.Fragment>
    )
}