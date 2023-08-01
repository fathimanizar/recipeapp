import { Button, Card, CardContent, Grid} from '@mui/material'
import React from 'react'
import b1 from "../images/burger1.webp";
import b2 from "../images/burger3.webp";
import b3 from "../images/burger4.webp";
import b4 from "../images/burger5.webp";
import b5 from "../images/burger6.webp";
import b6 from "../images/burger7.webp";
import buimg from "../images/burgers1.jpeg";
import '../components/style.css';

import { useNavigate } from 'react-router-dom';


const Burgers = () => {
  const navigate = useNavigate();
 
  const burgerincredient=(name)=>{
   
  navigate('/incredients',{state: {rname:name}});
  }


  return (
    <>
    <br />
    <div class='frontimg'>
       <img src={buimg} alt="" width={1200} height={250} style={{borderRadius:'20px'}}/>
        <h2 class='frontname' style={{color:'white'}}>Burger Recipes</h2>
    </div>
   <br /><br />
    <Grid container spacing={2} style={{marginBottom:"100px"}} >
    <Grid item xs={12} sm ={6} md={12} >
   <div class='row'>
     <div class='col-lg-4'>
   <Card sx={{ maxWidth: 400 }} style={{marginLeft:'190px',backgroundColor:'white',borderRadius:'10px',height:'350px',width:'300px'}}>
           
           <CardContent>
           <img style={{width:"250px",height:"200px",borderRadius:'10px'}} src={b1} alt="Card img" onClick={()=>burgerincredient("Mushroom Swiss Smash Burger")}/>
           <br />
           
           <Button  style={{fontFamily:'fantasy',color:'brown',textTransform:'inherit',fontSize:'30px'}} onClick={()=>burgerincredient("Mushroom Swiss Smash Burger")} >Mushroom Swiss Smash Burger
           </Button>
           </CardContent>   
               
   </Card>
    </div>
   <div class='col-lg-4'>
   <Card sx={{ maxWidth: 400 }} style={{marginLeft:'90px',backgroundColor:'white',borderRadius:'10px',height:'350px',width:'300px'}}>
           
           <CardContent>
           <img style={{width:"250px",height:"200px",borderRadius:'10px'}} src={b2} alt="Card img" onClick={()=>burgerincredient("Bang Blended Chicken Burger")}/>
           <br />
           
           <Button  style={{fontFamily:'fantasy',color:'brown',textTransform:'inherit',fontSize:'30px'}} onClick={()=>burgerincredient("Bang Blended Chicken Burger")} >Bang Blended Chicken Burger
           </Button>
           </CardContent>       
   </Card>
   </div>
   <div class='col-lg-4'>
   <Card sx={{ maxWidth: 400 }} style={{backgroundColor:'white',borderRadius:'10px',height:'350px',width:'300px'}}>
           
           <CardContent>
           <img style={{width:"250px",height:"200px",borderRadius:'10px'}} src={b3} alt="Card img" onClick={()=>burgerincredient("Asian Style Soy Burger")}/>
           <br />
           
           <Button  style={{fontFamily:'fantasy',color:'brown',textTransform:'inherit',fontSize:'30px'}} onClick={()=>burgerincredient("Asian Style Soy Burger")} >Asian Style Soy Burger
           </Button>
           </CardContent>       
   </Card>
   </div>
   
   <div class='col-lg-4'>
     <br />
   <Card sx={{ maxWidth: 400 }} style={{marginLeft:'190px',backgroundColor:'white',borderRadius:'10px',height:'350px',width:'300px'}}>
           
           <CardContent>
           <img style={{width:"250px",height:"200px",borderRadius:'10px'}} src={b4} alt="Card img" onClick={()=>burgerincredient("Blue Cheese Burger")}/>
           <br />
           
           <Button  style={{fontFamily:'fantasy',color:'brown',textTransform:'inherit',fontSize:'30px'}} onClick={()=>burgerincredient("Blue Cheese Burger")} >Blue Cheese Burger
           </Button>
           </CardContent>       
   </Card>
   </div>
   <div class='col-lg-4'>
     <br />
   <Card sx={{ maxWidth: 400 }} style={{marginLeft:'90px',backgroundColor:'white',borderRadius:'10px',height:'350px',width:'300px'}}>
           
           <CardContent>
           <img style={{width:"250px",height:"200px",borderRadius:'10px'}} src={b5} alt="Card img" onClick={()=>burgerincredient("Butter Bean Burger")}/>
           <br />
           
           <Button  style={{fontFamily:'fantasy',color:'brown',textTransform:'inherit',fontSize:'30px'}} onClick={()=>burgerincredient("Butter Bean Burger")} >Butter Bean Burger
           </Button>
           </CardContent>       
   </Card>
   </div>
   <div class='col-lg-4'>
     <br />
   <Card sx={{ maxWidth: 400 }} style={{backgroundColor:'white',borderRadius:'10px',height:'350px',width:'300px'}}>
           
           <CardContent>
           <img style={{width:"250px",height:"200px",borderRadius:'10px'}} src={b6} alt="Card img" onClick={()=>burgerincredient("Black Bean Veggie Burger")}/>
           <br />
           
           <Button  style={{fontFamily:'fantasy',color:'brown',textTransform:'inherit',fontSize:'30px'}} onClick={()=>burgerincredient("Black Bean Veggie Burger")} >Black Bean Veggie Burger
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

export default Burgers