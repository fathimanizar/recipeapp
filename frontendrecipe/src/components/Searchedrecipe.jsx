import { Button, Card, CardContent, Grid, IconButton, Tooltip } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import EditSharpIcon from '@mui/icons-material/EditSharp';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import Addrecipe from './Addrecipe';

const Searchedrecipe = () => {
    const[recipes,setRecipes]=useState([]);
    const location = useLocation();
    const[update,setUpdate]=useState(false);
    const [singlevalue,setSinglevalue]=useState([]);
    console.log("location",location.state.recipename);

    useEffect(()=>{
        axios.get("http://localhost:3003/searchrecipe/"+location.state.recipename)
        .then((response)=>{
            setRecipes(response.data);
            console.log(response.data);
         
        })
       },[location.state.recipename]);
 
       //  ................TO EDIT A RECIPE........................
   const editrecipe=(value)=>{
    setUpdate(true);
    setSinglevalue(value);
     }  

// ...........................TO DELETE A RECIPE.....................
const deleterecipe=(id)=>{
  axios.delete("http://localhost:3003/deleterecipe/"+id)
  .then(()=>{
    alert("Recipe deleted successfully");
    window.location.reload(false);
   
   })
   .catch(err=>{
     console.log(err)
   })
 }
 var finalJSX =    
 
    <Grid container spacing={2} style={{marginBottom:"550px",paddingTop:'50px'}}>
      {
          recipes.map((val,index)=>{
          return(

          <Grid item xs={6} sm ={6} md={12}>

              <Card sx={{ maxWidth: 345 }} style={{marginLeft:'10px',backgroundColor:'white',borderRadius:'10px'}}>
                      
                      <CardContent>
                      <img style={{width:"300px",height:"200px",borderRadius:'10px'}} src={val.recipe_image} alt="Card img"/>
                      <h2 style={{fontFamily:'fantasy'}}>{val.recipe_name}</h2>
                      <br />
                      <p style={{fontFamily:'fantasy'}}>Duration for cooking: {val.recipe_duration}</p>
                      <p style={{fontFamily:'fantasy'}}>No. of Servings: {val.recipe_servings_no}</p>
                      {/* EDIT BUTTON */}
                      <Button variant='contained' style={{color:'rgb(184, 182, 182)',backgroundColor:'#128A85',height:'20px'}} onClick={()=>editrecipe(val)}>
                      <Tooltip title='Edit Recipe'>
                      <IconButton>
                      <EditSharpIcon style={{fontSize:'20px',color:'black'}}/>
                      </IconButton>
                      </Tooltip>
                      </Button>
                      &nbsp;&nbsp;
                      {/* DELETE BUTTON */}
                      <Button variant='contained'style={{color:'rgb(184, 182, 182)',backgroundColor:'#128A85',height:'20px'}} onClick={()=>deleterecipe(val._id)}>
                      <Tooltip title='Delete Recipe'>
                      <IconButton>
                      <DeleteSharpIcon style={{fontSize:'20px',color:'black'}}/>
                      </IconButton>
                      </Tooltip>
                      </Button>
                        </CardContent>
                       
                </Card>

          </Grid>
                )
                                    })
          } 
      </Grid>

if(update) finalJSX = <Addrecipe data={singlevalue} method='put'/>
return finalJSX;
};


export default Searchedrecipe