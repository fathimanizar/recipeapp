import { Button, Card, CardContent, Grid} from '@mui/material'
import React from 'react'
import b1 from "../images/sauce1.webp";
import b2 from "../images/sauce2.webp";
import b3 from "../images/sauce3.webp";
import b4 from "../images/sauce4.webp";
import b5 from "../images/sauce5.webp";
import b6 from "../images/sauce6.webp";

import sauceimg from "../images/sauces.jpeg";
import '../components/style.css';
import { useNavigate } from 'react-router-dom';

const Sauces = () => {
  const navigate = useNavigate();
 
  const sauceincredient=(name)=>{
   
  navigate('/incredients',{state: {rname:name}});
  }
  return (
    <>
    <br />
    <div class='frontimg'>
       <img src={sauceimg} alt="" width={1200} height={250} style={{borderRadius:'20px'}}/>
        <h2 class='frontname' style={{color:'white'}}>Sauce Recipes</h2>
    </div>
   <br /><br />
    <Grid container spacing={2} style={{marginBottom:"100px"}} >
    <Grid item xs={12} sm ={6} md={12} >
   <div class='row'>
     <div class='col-lg-4'>
   <Card sx={{ maxWidth: 400 }} style={{marginLeft:'190px',backgroundColor:'white',borderRadius:'10px',height:'330px',width:'300px'}}>
           
           <CardContent>
           <img style={{width:"250px",height:"200px",borderRadius:'10px'}} src={b1} alt="Card img" onClick={()=>sauceincredient("Tartar Sauce")}/>
           <br />
           
           <Button  style={{fontFamily:'fantasy',color:'brown',textTransform:'inherit',fontSize:'30px'}} onClick={()=>sauceincredient("Tartar Sauce")} >Tartar Sauce
           </Button>
           </CardContent>   
               
   </Card>
    </div>
   <div class='col-lg-4'>
   <Card sx={{ maxWidth: 400 }} style={{marginLeft:'90px',backgroundColor:'white',borderRadius:'10px',height:'330px',width:'300px'}}>
           
           <CardContent>
           <img style={{width:"250px",height:"200px",borderRadius:'10px'}} src={b2} alt="Card img" onClick={()=>sauceincredient("Cranberry Sauce")}/>
           <br />
           
           <Button  style={{fontFamily:'fantasy',color:'brown',textTransform:'inherit',fontSize:'30px'}} onClick={()=>sauceincredient("Cranberry Sauce")} >Cranberry Sauce
           </Button>
           
           </CardContent>       
   </Card>
   </div>
   <div class='col-lg-4'>
   <Card sx={{ maxWidth: 400 }} style={{backgroundColor:'white',borderRadius:'10px',height:'330px',width:'300px'}}>
           
           <CardContent>
           <img style={{width:"250px",height:"200px",borderRadius:'10px'}} src={b3} alt="Card img" onClick={()=>sauceincredient("Enchilada Sauce")}/>
           <br />
           
           <Button  style={{fontFamily:'fantasy',color:'brown',textTransform:'inherit',fontSize:'30px'}} onClick={()=>sauceincredient("Enchilada Sauce")} >Enchilada Sauce
           </Button>
           
           </CardContent>       
   </Card>
   </div>
   
   <div class='col-lg-4'>
     <br />
   <Card sx={{ maxWidth: 400 }} style={{marginLeft:'190px',backgroundColor:'white',borderRadius:'10px',height:'330px',width:'300px'}}>
           
           <CardContent>
           <img style={{width:"250px",height:"200px",borderRadius:'10px'}} src={b4} alt="Card img" onClick={()=>sauceincredient("Homemade Tomato Sauce")}/>
           <br />
           
           <Button  style={{fontFamily:'fantasy',color:'brown',textTransform:'inherit',fontSize:'30px'}} onClick={()=>sauceincredient("Homemade Tomato Sauce")} >Homemade Tomato Sauce
           </Button>
           </CardContent>       
   </Card>
   </div>
   <div class='col-lg-4'>
     <br />
   <Card sx={{ maxWidth: 400 }} style={{marginLeft:'90px',backgroundColor:'white',borderRadius:'10px',height:'330px',width:'300px'}}>
           
           <CardContent>
           <img style={{width:"250px",height:"200px",borderRadius:'10px'}} src={b5} alt="Card img" onClick={()=>sauceincredient("Creamy Mushroom Sauce")}/>
           <br />
           
           <Button  style={{fontFamily:'fantasy',color:'brown',textTransform:'inherit',fontSize:'30px'}} onClick={()=>sauceincredient("Creamy Mushroom Sauce")} >Creamy Mushroom Sauce
           </Button>
           
           </CardContent>       
   </Card>
   </div>
   <div class='col-lg-4'>
     <br />
   <Card sx={{ maxWidth: 400 }} style={{backgroundColor:'white',borderRadius:'10px',height:'330px',width:'300px'}}>
           
           <CardContent>
           <img style={{width:"250px",height:"200px",borderRadius:'10px'}} src={b6} alt="Card img" onClick={()=>sauceincredient("Alfredo Sauce")}/>
           <br />
           
           <Button  style={{fontFamily:'fantasy',color:'brown',textTransform:'inherit',fontSize:'30px'}} onClick={()=>sauceincredient("Alfredo Sauce")} >Alfredo Sauce
           </Button>
           
           </CardContent>       
   </Card>
   </div>
   </div>

   </Grid>
   
    </Grid>
    </>
  )
}

export default Sauces