import { Button, Card, CardContent, Grid} from '@mui/material'
import React from 'react'
import b1 from "../images/salad1.webp";
import b2 from "../images/salad2.webp";
import b3 from "../images/salad3.webp";
import b4 from "../images/salad4.webp";
import b5 from "../images/salad5.webp";
import b6 from "../images/salad6.webp";

import saladimg from "../images/salads.webp";
import '../components/style.css';
import { useNavigate } from 'react-router-dom';

const Salads = () => {
  const navigate = useNavigate();
 
  const saladincredient=(name)=>{
   
  navigate('/incredients',{state: {rname:name}});
  }
  return (
    <>
    <br />
    <div class='frontimg'>
       <img src={saladimg } alt="" width={1200} height={250} style={{borderRadius:'20px'}}/>
        <h2 class='frontname' style={{color:'white'}}>Salad Recipes</h2>
    </div>
   <br /><br />
    <Grid container spacing={2} style={{marginBottom:"100px"}} >
    <Grid item xs={12} sm ={6} md={12} >
   <div class='row'>
     <div class='col-lg-4'>
   <Card sx={{ maxWidth: 400 }} style={{marginLeft:'190px',backgroundColor:'white',borderRadius:'10px',height:'330px',width:'300px'}}>
           
           <CardContent>
           <img style={{width:"250px",height:"200px",borderRadius:'10px'}} src={b1} alt="Card img" onClick={()=>saladincredient("Greek Couscous Salad")} />
           <br />
          
           <Button style={{fontFamily:'fantasy',color:'brown',textTransform:'inherit',fontSize:'30px'}} onClick={()=>saladincredient("Greek Couscous Salad")} >Greek Couscous Salad
           </Button>
           </CardContent>   
               
   </Card>
    </div>
   <div class='col-lg-4'>
   <Card sx={{ maxWidth: 400 }} style={{marginLeft:'90px',backgroundColor:'white',borderRadius:'10px',height:'330px',width:'300px'}}>
           
           <CardContent>
           <img style={{width:"250px",height:"200px",borderRadius:'10px'}} src={b2} alt="Card img" onClick={()=>saladincredient("Pecan Chicken Salad")}/>
           <br />
        
           <Button style={{fontFamily:'fantasy',color:'brown',textTransform:'inherit',fontSize:'30px'}} onClick={()=>saladincredient("Pecan Chicken Salad")}>Pecan Chicken Salad
           </Button>
        
           </CardContent>       
   </Card>
   </div>
   <div class='col-lg-4'>
   <Card sx={{ maxWidth: 400 }} style={{backgroundColor:'white',borderRadius:'10px',height:'330px',width:'300px'}}>
           
           <CardContent>
           <img style={{width:"250px",height:"200px",borderRadius:'10px'}} src={b3} alt="Card img" onClick={()=>saladincredient("Green Goddess Salad")}/>
           <br />
        
           <Button style={{fontFamily:'fantasy',color:'brown',textTransform:'inherit',fontSize:'30px'}} onClick={()=>saladincredient("Green Goddess Salad")}>Green Goddess Salad
           </Button>
           
           </CardContent>       
   </Card>
   </div>
   
   <div class='col-lg-4'>
     <br />
   <Card sx={{ maxWidth: 400 }} style={{marginLeft:'190px',backgroundColor:'white',borderRadius:'10px',height:'330px',width:'300px'}}>
           
           <CardContent>
           <img style={{width:"250px",height:"200px",borderRadius:'10px'}} src={b4} alt="Card img" onClick={()=>saladincredient("Waldorf Salad")}/>
           <br />
        
           <Button style={{fontFamily:'fantasy',color:'brown',textTransform:'inherit',fontSize:'30px'}} onClick={()=>saladincredient("Waldorf Salad")}>Waldorf Salad
           </Button>
           </CardContent>       
   </Card>
   </div>
   <div class='col-lg-4'>
     <br />
   <Card sx={{ maxWidth: 400 }} style={{marginLeft:'90px',backgroundColor:'white',borderRadius:'10px',height:'330px',width:'300px'}}>
           
           <CardContent>
           <img style={{width:"250px",height:"200px",borderRadius:'10px'}} src={b5} alt="Card img" onClick={()=>saladincredient("Classic Macaroni Salad")}/>
           <br />
        
           <Button style={{fontFamily:'fantasy',color:'brown',textTransform:'inherit',fontSize:'30px'}} onClick={()=>saladincredient("Classic Macaroni Salad")}>Classic Macaroni Salad
           </Button>
           </CardContent>       
   </Card>
   </div>
   <div class='col-lg-4'>
     <br />
   <Card sx={{ maxWidth: 400 }} style={{backgroundColor:'white',borderRadius:'10px',height:'330px',width:'300px'}}>
           
           <CardContent>
           <img style={{width:"250px",height:"200px",borderRadius:'10px'}} src={b6} alt="Card img" onClick={()=>saladincredient("Pasta Salad")}/>
           <br />
      
           <Button style={{fontFamily:'fantasy',color:'brown',textTransform:'inherit',fontSize:'30px'}} onClick={()=>saladincredient("Pasta Salad")}>Pasta Salad
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

export default Salads