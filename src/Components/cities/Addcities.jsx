import React, { useState } from "react";
import { Grid,TextField,Button } from "@mui/material";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

export const Addcities=()=>{
     const [cit,setCit]=useState("");

     const handleAdd=()=>{
             axios.post("http://localhost:3030/addcities",{
                citId:uuidv4(),
                citName:cit,
                isActive:true,
             });
             setCit("")
     }
    return(
        <React.Fragment>
            
         <Grid container spacing={3}>
            <Grid item xs={9}>
             <TextField label="Add cities"
              variant="outlined"
              value={cit}
               fullWidth onChange={e=>setCit(e.target.value)}
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