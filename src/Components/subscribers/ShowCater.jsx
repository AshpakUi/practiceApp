import React,{useState,useEffect} from "react";
import { Card,CardContent,Grid } from "@mui/material";
import axios from "axios";

export const ShowCater=()=>{
    const [data,setData]=useState([])

    const getApi= async()=>{
  const Result=await axios.get("http://localhost:3030/categories")
  console.log(Result.data)
  setData(Result.data)
    }

    useEffect(()=>{
         getApi()
    },[])
    return(
        <React.Fragment>
            <h1>Show Categories</h1>
            <Grid container spacing={3}>
            {
                data.map(elem=>
                    <Grid item xs={3}>
                        <Card>
                         <CardContent sx={{bgcolor:"yellow",color:"red"}}>
                            <h3>{elem.catName}</h3>
                        
                        </CardContent>
                        </Card>
                    </Grid>
                    )
            }
            </Grid>
        </React.Fragment>
    )
}