import React, { useState } from "react";
import { Grid,TextField,Button } from "@mui/material";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

export const AddGender=()=>{
     const [gen,setGen]=useState("");

     const handleAdd=()=>{
             axios.post("http://localhost:3030/addgenders",{
                genId:uuidv4(),
                genName:gen,
                isActive:true,
             });
             setGen("")
     }
    return(
        <React.Fragment>
            
         <Grid container spacing={3}>
            <Grid item xs={9}>
             <TextField label="Add gender"
              variant="outlined"
              value={gen}
               fullWidth onChange={e=>setGen(e.target.value)}
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