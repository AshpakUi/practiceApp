import React,{useState,useEffect} from "react";
import { Card,CardContent,Grid,Button,TextField } from "@mui/material";

export const Registration=()=>{
    const [fname,setFname]=useState("");
    const [lname,setLname]=useState("");
    const handleSubmit=()=>{
        sessionStorage.setItem("city","pune");
        sessionStorage.setItem("pet","cat");
        sessionStorage.setItem("firstname",fname);
        sessionStorage.setItem("lastname",lname);
    }
    useEffect(()=>{
        setFname(sessionStorage.getItem("firstname"));
        setLname(sessionStorage.getItem("lastname"));

    },[])
    return(
        <React.Fragment>
            <Card>
                <CardContent>
                    <Grid container spacing={3}>
                       <Grid item xs={3}>First Name:</Grid>
                    
                    <Grid item xs={9}>
                        <TextField label="First Name " 
                        variant="outlined"
                        value={fname}
                         fullWidth 
                         onChange={(e)=>setFname(e.target.value)}/>
                    </Grid>
                    <Grid item xs={3}>
                        Last Name:
                    </Grid>
                    <Grid item xs={9}>
                    <TextField label="Last Name" 
                    value={lname}
                    variant="outlined"
                     fullWidth onChange={(e)=>setLname(e.target.value)}/>
                    </Grid>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={3}>
                        <Button variant="contained" onClick={handleSubmit}>Submit</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="contained">Cancel</Button>
                    </Grid>
                    

                    </Grid>
                </CardContent>
            </Card>
        </React.Fragment>
    )
}