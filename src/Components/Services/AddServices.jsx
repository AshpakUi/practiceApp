import React, { useState } from "react";
import { Grid,TextField,Button } from "@mui/material";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

export const AddServices=()=>{
     const [ser,setSer]=useState("");

     const handleAdd=()=>{
             axios.post("http://localhost:3030/addservices",{
                serId:uuidv4(),
                serName:ser,
                isActive:true,
             });
             setSer("")
     }
    return(
        <React.Fragment>
            
         <Grid container spacing={3}>
            <Grid item xs={9}>
             <TextField label="Add services"
              variant="outlined"
              value={ser}
               fullWidth onChange={e=>setSer(e.target.value)}
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