import { Button, Card, CardContent, Grid} from '@mui/material'
import React from 'react'
import b1 from "../images/drink1.webp";
import b2 from "../images/drink2.webp";
import b3 from "../images/drink3.webp";
import b4 from "../images/drink4.webp";
import b5 from "../images/drink5.webp";
import b6 from "../images/drink6.webp";

import drinkimg from "../images/drinks1.jpeg";
import '../components/style.css';
import { useNavigate } from 'react-router-dom';

const Drinks = () => {
  const navigate = useNavigate();
 
  const drinkincredient=(name)=>{
   
  navigate('/incredients',{state: {rname:name}});
  }
  return (
    <>
    <br />
    <div class='frontimg'>
       <img src={drinkimg} alt="" width={1200} height={250} style={{borderRadius:'20px'}}/>
        <h2 class='frontname' style={{color:'white'}}>Drink Recipes</h2>
    </div>
   <br /><br />
    <Grid container spacing={2} style={{marginBottom:"100px"}} >
    <Grid item xs={12} sm ={6} md={12} >
   <div class='row'>
     <div class='col-lg-4'>
   <Card sx={{ maxWidth: 400 }} style={{marginLeft:'190px',backgroundColor:'white',borderRadius:'10px',height:'330px',width:'300px'}}>
           
           <CardContent>
           <img style={{width:"250px",height:"200px",borderRadius:'10px'}} src={b1} alt="Card img" onClick={()=>drinkincredient("Spiked Lemonade")}/>
           <br />
        
           <Button style={{fontFamily:'fantasy',color:'brown',textTransform:'inherit',fontSize:'30px'}} onClick={()=>drinkincredient("Spiked Lemonade")} >Spiked Lemonade
           </Button>
           </CardContent>   
               
   </Card>
    </div>
   <div class='col-lg-4'>
   <Card sx={{ maxWidth: 400 }} style={{marginLeft:'90px',backgroundColor:'white',borderRadius:'10px',height:'330px',width:'300px'}}>
           
           <CardContent>
           <img style={{width:"250px",height:"200px",borderRadius:'10px'}} src={b2} alt="Card img" onClick={()=>drinkincredient("Copycat Pink Drink")}/>
           <br />
        
           <Button style={{fontFamily:'fantasy',color:'brown',textTransform:'inherit',fontSize:'30px'}} onClick={()=>drinkincredient("Copycat Pink Drink")} >Copycat Pink Drink
           </Button>
          
           
           </CardContent>       
   </Card>
   </div>
   <div class='col-lg-4'>
   <Card sx={{ maxWidth: 400 }} style={{backgroundColor:'white',borderRadius:'10px',height:'330px',width:'300px'}}>
           
           <CardContent>
           <img style={{width:"250px",height:"200px",borderRadius:'10px'}} src={b3} alt="Card img" onClick={()=>drinkincredient("Pineapple Margarita")}/>
           <br />
       
           <Button style={{fontFamily:'fantasy',color:'brown',textTransform:'inherit',fontSize:'30px'}} onClick={()=>drinkincredient("Pineapple Margarita")} >Pineapple Margarita
           </Button>
          
           
           </CardContent>       
   </Card>
   </div>
   
   <div class='col-lg-4'>
     <br />
   <Card sx={{ maxWidth: 400 }} style={{marginLeft:'190px',backgroundColor:'white',borderRadius:'10px',height:'330px',width:'300px'}}>
           
           <CardContent>
           <img style={{width:"250px",height:"200px",borderRadius:'10px'}} src={b4} alt="Card img" onClick={()=>drinkincredient("Strawberry Daiquiri")}/>
           <br />
        
           <Button style={{fontFamily:'fantasy',color:'brown',textTransform:'inherit',fontSize:'30px'}} onClick={()=>drinkincredient("Strawberry Daiquiri")} >Strawberry Daiquiri
           </Button>
           </CardContent>       
   </Card>
   </div>
   <div class='col-lg-4'>
     <br />
   <Card sx={{ maxWidth: 400 }} style={{marginLeft:'90px',backgroundColor:'white',borderRadius:'10px',height:'330px',width:'300px'}}>
           
           <CardContent>
           <img style={{width:"250px",height:"200px",borderRadius:'10px'}} src={b5} alt="Card img" onClick={()=>drinkincredient("Peanut Butter Banana Smoothie")}/>
           <br />
 
           <Button style={{fontFamily:'fantasy',color:'brown',textTransform:'inherit',fontSize:'30px'}} onClick={()=>drinkincredient("Peanut Butter Banana Smoothie")} >Peanut Butter Banana Smoothie
           </Button>
           
           </CardContent>       
   </Card>
   </div>
   <div class='col-lg-4'>
     <br />
   <Card sx={{ maxWidth: 400 }} style={{backgroundColor:'white',borderRadius:'10px',height:'330px',width:'300px'}}>
           
           <CardContent>
           <img style={{width:"250px",height:"200px",borderRadius:'10px'}} src={b6} alt="Card img" onClick={()=>drinkincredient("Ginger-Hibiscus Sparkler")}/>
           <br />
       
           <Button style={{fontFamily:'fantasy',color:'brown',textTransform:'inherit',fontSize:'30px'}} onClick={()=>drinkincredient("Ginger-Hibiscus Sparkler")} >Ginger-Hibiscus Sparkler
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

export default Drinks