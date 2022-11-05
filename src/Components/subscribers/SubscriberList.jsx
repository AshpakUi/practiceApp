import React, { useState,useEffect } from "react";
import axios from "axios";
import { Grid,TextField,Button } from "@mui/material";
import { SubscribersItem } from "./SubscriberItem";

export const SubscriberList=()=>{
    const [data,setData]=useState([]);
    const [filt,setFilt]=useState([]);
    const [txt,setTxt]=useState("")
    
    const getData= async()=>{
        const result =await axios.get("http://localhost:3030/subscribers")
        
setFilt(result.data)
setData(result.data)

}
useEffect(()=>{
if (txt.length>=3){
    const filtered = data.filter(item=>item.lname.toUpperCase().includes(txt.toUpperCase())
    ||
    item.fname.toUpperCase().includes(txt.toUpperCase())
    )
    setFilt(filtered);
}else {
    setFilt(data);
}

},[txt]);

useEffect(()=>{
    getData()
},[])

    return(
        <React.Fragment>
            
            <h1>This is Subscribers</h1>

            <Grid container spacing={3}>
                
                
              
                <Grid item xs={12}>
                <TextField label="Search.." variant="outlined" onChange={(e)=>setTxt(e.target.value)} fullWidth/>
                </Grid>
               {
                filt.map((item)=>
                <Grid item xs={3}>
                 <SubscribersItem item={item}/>
                </Grid>

                )
               }
            </Grid>
        </React.Fragment>
    )
}