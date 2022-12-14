import React,{useState,useEffect} from "react";
import { Grid } from "@mui/material";
import { DisplayItem } from "./DisplayItem";

export const DisplayList=({oData,fields})=>{
    const [data,setData]=useState(oData);
    const [filt,setFilt]=useState(oData);

    useEffect(()=>{
        setData(oData);
        setFilt(oData);
    },[oData])

    return(
        <React.Fragment>
            <Grid container spacing={3}>
                
              {
                filt.map(item=>
                    <DisplayItem item={item} fields={fields} />
                    )
              }
            </Grid>
        </React.Fragment>
    )
}