import React from "react";
import { TextField,Grid,Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { useState } from "react";

export const Product= () =>{
    const [prod,setProd]=useState("")
    const [pet,setPet]=useState("")
    const dispatch = useDispatch();
    const handleAdd = () => {
        dispatch({
            type:"ADD_PRODUCTS",
            data:prod,
        })
       
    }
    const handleAddPet=()=>{
        dispatch({
            type:"ADD_PET",
            data:pet,
        })
    }
    return(
        <React.Fragment>
           <Grid container spacing={3}>
            
            <Grid item xs={6}>
            <TextField variant="outlined" fullWidth label="Add Product" onChange={(e)=>setProd(e.target.value)}/>
            </Grid>
            <Grid item xs={6}>
               <Button variant="contained" fullWidth onClick={handleAdd} >Add</Button>
            </Grid>
            <Grid item xs={6}>
            <TextField variant="outlined" fullWidth label="ADD_PET" onChange={(e)=>setPet(e.target.value)}/>
            </Grid>
            <Grid item xs={6}>
               <Button variant="contained" fullWidth onClick={handleAddPet} >Add</Button>
            </Grid>
           </Grid>
        </React.Fragment>
    )
}