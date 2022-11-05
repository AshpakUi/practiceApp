import React,{useState,useEffect} from "react";
import axios from "axios";
import { Grid,Card,CardContent } from "@mui/material";

export const Finacedata=()=>{
const [data,setData]=useState([])

const getApi=async()=>{
 const Result=  await   axios.get("http://localhost:3030/subscribers")
 console.log(Result.data)
 setData(Result.data)

}

useEffect(()=>{
    getApi()
},[])

    return(
        <React.Fragment>
<h1>This is  Finance data</h1>
{
    data.map((item)=>
       <Grid item xs={3}>
            
       </Grid>
    )
}
        </React.Fragment>
    )
}