import React, { useState } from "react";
import { Grid,TextField,Button } from "@mui/material";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

export const CategoryAdd=()=>{
     const [cat,setCat]=useState("");

     const handleAdd=()=>{
             axios.post("http://localhost:3030/addcategory",{
                catId:uuidv4(),
                catName:cat,
                isActive:true,
             });
             setCat("")
     }
    return(
        <React.Fragment>
            
         <Grid container spacing={3}>
            <Grid item xs={9}>
             <TextField label="Add category"
              variant="outlined"
              value={cat}
               fullWidth onChange={e=>setCat(e.target.value)}
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