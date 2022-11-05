import React,{useState} from "react";
import axios from "axios";
import { useEffect } from "react";
import  {Grid,Card,CardContent,TextField} from "@mui/material"
import "./Practice.css"

export const Practice=()=>{
const [data,setData]=useState([])
const [dataC,setDataC]=useState([])

const getdata=async()=>{
    const result=await axios.get("https://api.imgflip.com/get_memes")
  console.log(result.data.data);
    setData(result.data.data.memes)
    setDataC(result.data.data.memes)
}
useEffect(()=>{
    getdata()
},[])
const serch=(e)=>{
    const resultserch=dataC.filter((elem)=>elem.id.toUpperCase().includes(e.target.value.toUpperCase()))
    setData(resultserch)
}
    return(
        <React.Fragment>
            <h1>This is a Practice Componunt </h1>
            <Card>
                <CardContent>
                        <TextField variant="outlined" label="ID Number Search......." fullWidth onChange={serch} type="number"/>
                    <Grid container spacing={2}>
                        {
                            data.map((item)=>
                               <Grid item xs={3}>
                                  <Card className="card">
                                    <CardContent className="cardhover">
                                        <img src={item.url} height={200} width={200} /><br />
                                        <b> Memes Name:-{item.name}</b><br />
                                        <i>{item.id}</i>
                                    </CardContent>
                                  </Card>
                               </Grid>
                            
                            )
                        }
                    </Grid>
                </CardContent>
            </Card>
        </React.Fragment>
    )
}