import { Button, Card, CardContent, Grid, IconButton, Tooltip, Typography} from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import EditSharpIcon from '@mui/icons-material/EditSharp';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import { Link, useLocation } from 'react-router-dom';
import Addrecipe from './Addrecipe';
import '../components/style.css';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleIcon from '@mui/icons-material/People';
import AddSharpIcon from '@mui/icons-material/AddSharp';



const Recipes = () => {
  const location = useLocation();
  const[cuisines,setCuisines]=useState([]);
  const[recipes,setRecipes]=useState([]);
  const[update,setUpdate]=useState(false);
  const [singlevalue,setSinglevalue]=useState([]);

  useEffect(()=>{
    axios.get("http://localhost:3003/viewcuisine/"+location.state.cuiname)
    .then((response)=>{
        setCuisines(response.data);
    })
   },[location.state.cuiname]);
 
  useEffect(()=>{
    axios.get("http://localhost:3003/viewrecipes/"+location.state.cuiname)
    .then((response)=>{
        setRecipes(response.data);
    })
   },[location.state.cuiname]);

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
 <>

   <div class="row recipeclass">
       <div class="col-lg-1"></div>
       <div class="col-lg-10">
 
    {cuisines.map((value,index)=>{
    return(
      <>
     
      <img src={value.cuisine_image} class="d-block w-100" alt="cuisine-img" height={300}  data-interval="100" style={{borderRadius:'20px'}}/>
      <br />
      <Typography style={{color:'black',fontFamily:'fantasy'}} variant='h3'>{location.state.cuiname} Cuisine</Typography>
      <br />
      <Typography style={{color:'black',textAlign:'justify'}} variant='h5'>{value.cuisine_desc}</Typography>
      <br />
     
      <Tooltip title='Cooking Time' style={{color:'black'}}>
      <AccessTimeIcon style={{fontSize:'50px',color:'black'}}/>
      {value.cuisine_duration}
      </Tooltip>&nbsp;&nbsp;&nbsp;
      
      <Tooltip title='No. of servings' style={{color:'black'}}>
      <PeopleIcon style={{fontSize:'50px',color:'black'}}/>
      {value.cuisine_servings_no}
      </Tooltip>
      
      </>
      )
      })
      }

    
<br />

    <Grid container spacing={2} style={{marginBottom:"100px",paddingTop:'50px'}}>
  

      {

          recipes.map((val,index)=>{
          return(

          <Grid item xs={12} sm ={6} md={4}>

              <Card sx={{ maxWidth: 345 }} class='recipecard' style={{marginLeft:'30px',backgroundColor:'white',borderRadius:'10px',height:'450px',width:'345px'}}>
                      
                      <CardContent>
                      <img style={{width:"300px",height:"200px",borderRadius:'10px'}} src={val.recipe_image} alt="Card img"/>
                      <br /><br />
                      <h2 style={{fontFamily:'fantasy'}}>{val.recipe_name}</h2>
                      <br />
                      <Tooltip title='Cooking Time' style={{color:'black'}}>
                      <AccessTimeIcon style={{fontSize:'30px',color:'black'}}/>
                      {val.recipe_duration}
                      </Tooltip>&nbsp;&nbsp;&nbsp;
                      
                      <Tooltip title='No. of servings' style={{color:'black'}}>
                      <PeopleIcon style={{fontSize:'30px',color:'black'}}/>
                      {val.recipe_servings_no}
                      </Tooltip>
                      <br /><br />
                    
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
             <Card sx={{ maxWidth: 545 }} class='recipecard' style={{marginLeft:'43px',marginTop:'18px',backgroundColor:'white',borderRadius:'10px',height:'450px',width:'345px'}}>
                      
                      <CardContent>
                      <Button variant='contained'  style={{color:'white',backgroundColor:'#128A85',width:'25%',height:'50px',borderRadius:'10px',marginTop:'180px'}}>
                        <Link to='/addrecipe'>
                    <Tooltip title='Add Recipe'>
                            <IconButton>
                            <AddSharpIcon style={{fontSize:'40px',color:'white'}}/>
                            </IconButton>
                        </Tooltip>
                        </Link>
                    </Button>
                        </CardContent>
                       
                </Card>
      </Grid>
      </div>
   </div>
      </>
if(update) finalJSX = <Addrecipe data={singlevalue} method='put'/>
return finalJSX;
};

export default Recipes