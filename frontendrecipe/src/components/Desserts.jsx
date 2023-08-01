import { Button, Card, CardContent, Grid} from '@mui/material'
import React from 'react'
import b1 from "../images/dessert1.webp";
import b2 from "../images/dessert2.webp";
import b3 from "../images/dessert3.webp";
import b4 from "../images/dessert4.webp";
import b5 from "../images/dessert5.webp";
import b6 from "../images/dessert6.webp";

import drinkimg from "../images/desserts.webp";
import '../components/style.css';
import { useNavigate } from 'react-router-dom';

const Desserts = () => {
  const navigate = useNavigate();
 
  const dessertincredient=(name)=>{
   
  navigate('/incredients',{state: {rname:name}});
  }
  return (
    <>
    <br />
    <div class='frontimg'>
       <img src={drinkimg} alt="" width={1200} height={250} style={{borderRadius:'20px'}}/>
        <h2 class='frontname' style={{color:'white'}}>Dessert Recipes</h2>
    </div>
   <br /><br />
    <Grid container spacing={2} style={{marginBottom:"100px"}} >
    <Grid item xs={12} sm ={6} md={12} >
   <div class='row'>
     <div class='col-lg-4'>
   <Card sx={{ maxWidth: 400 }} style={{marginLeft:'190px',backgroundColor:'white',borderRadius:'10px',height:'330px',width:'300px'}}>
           
           <CardContent>
           <img style={{width:"250px",height:"200px",borderRadius:'10px'}} src={b1} alt="Card img" onClick={()=>dessertincredient("Sticky Toffee Pudding")}/>
           <br />
       
           <Button style={{fontFamily:'fantasy',color:'brown',textTransform:'inherit',fontSize:'30px'}} onClick={()=>dessertincredient("Sticky Toffee Pudding")}>Sticky Toffee Pudding
           </Button>
           </CardContent>   
               
   </Card>
    </div>
   <div class='col-lg-4'>
   <Card sx={{ maxWidth: 400 }} style={{marginLeft:'90px',backgroundColor:'white',borderRadius:'10px',height:'330px',width:'300px'}}>
           
           <CardContent>
           <img style={{width:"250px",height:"200px",borderRadius:'10px'}} src={b2} alt="Card img" onClick={()=>dessertincredient("Baked Churro Bites")}/>
           <br />
       
           <Button style={{fontFamily:'fantasy',color:'brown',textTransform:'inherit',fontSize:'30px'}} onClick={()=>dessertincredient("Baked Churro Bites")}>Baked Churro Bites
           </Button> 
           </CardContent>       
   </Card>
   </div>
   <div class='col-lg-4'>
   <Card sx={{ maxWidth: 400 }} style={{backgroundColor:'white',borderRadius:'10px',height:'330px',width:'300px'}}>
           
           <CardContent>
           <img style={{width:"250px",height:"200px",borderRadius:'10px'}} src={b3} alt="Card img" onClick={()=>dessertincredient("Baileys Cheesecake")}/>
           <br />
     
           <Button style={{fontFamily:'fantasy',color:'brown',textTransform:'inherit',fontSize:'30px'}} onClick={()=>dessertincredient("Baileys Cheesecake")}>Baileys Cheesecake
           </Button> 
           
           </CardContent>       
   </Card>
   </div>
   
   <div class='col-lg-4'>
     <br />
   <Card sx={{ maxWidth: 400 }} style={{marginLeft:'190px',backgroundColor:'white',borderRadius:'10px',height:'330px',width:'300px'}}>
           
           <CardContent>
           <img style={{width:"250px",height:"200px",borderRadius:'10px'}} src={b4} alt="Card img" onClick={()=>dessertincredient("Mason Jar Ice Cream")}/>
           <br />
         
           <Button style={{fontFamily:'fantasy',color:'brown',textTransform:'inherit',fontSize:'30px'}} onClick={()=>dessertincredient("Mason Jar Ice Cream")}>Mason Jar Ice Cream
           </Button> 
          
           </CardContent>       
   </Card>
   </div>
   <div class='col-lg-4'>
     <br />
   <Card sx={{ maxWidth: 400 }} style={{marginLeft:'90px',backgroundColor:'white',borderRadius:'10px',height:'330px',width:'300px'}}>
           
           <CardContent>
           <img style={{width:"250px",height:"200px",borderRadius:'10px'}} src={b5} alt="Card img" onClick={()=>dessertincredient("Baileys Chocolate Mousse")}/>
           <br />
        
           <Button style={{fontFamily:'fantasy',color:'brown',textTransform:'inherit',fontSize:'30px'}} onClick={()=>dessertincredient("Baileys Chocolate Mousse")}>Baileys Chocolate Mousse
           </Button> 
           
           </CardContent>       
   </Card>
   </div>
   <div class='col-lg-4'>
     <br />
   <Card sx={{ maxWidth: 400 }} style={{backgroundColor:'white',borderRadius:'10px',height:'330px',width:'300px'}}>
           
           <CardContent>
           <img style={{width:"250px",height:"200px",borderRadius:'10px'}} src={b6} alt="Card img" onClick={()=>dessertincredient("TikTok Brownies")}/>
           <br />
          
           <Button style={{fontFamily:'fantasy',color:'brown',textTransform:'inherit',fontSize:'30px'}} onClick={()=>dessertincredient("TikTok Brownies")}>TikTok Brownies
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

export default Desserts