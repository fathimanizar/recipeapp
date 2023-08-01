import { Button, Card, CardContent, Grid} from '@mui/material'
import React from 'react'
import b1 from "../images/soup1.webp";
import b2 from "../images/soup2.webp";
import b3 from "../images/soup3.webp";
import b4 from "../images/soup4.webp";
import b5 from "../images/soup5.webp";
import b6 from "../images/soup6.webp";

import soupimg from "../images/soups1.jpeg";
import '../components/style.css';
import { useNavigate } from 'react-router-dom';

const Soups = () => {
  const navigate = useNavigate();
 
  const soupincredient=(name)=>{
  navigate('/incredients',{state: {rname:name}});
  }
  return (
    <>
    <br />
    <div class='frontimg'>
       <img src={soupimg} alt="" width={1200} height={250} style={{borderRadius:'20px'}}/>
        <h2 class='frontname' style={{color:'white'}}>Soup Recipes</h2>
    </div>
   <br /><br />
    <Grid container spacing={2} style={{marginBottom:"100px"}} >
    <Grid item xs={12} sm ={6} md={12} >
   <div class='row'>
     <div class='col-lg-4'>
   <Card sx={{ maxWidth: 400 }} style={{marginLeft:'190px',backgroundColor:'white',borderRadius:'10px',height:'380px',width:'300px'}}>
           
           <CardContent>
           <img style={{width:"250px",height:"200px",borderRadius:'10px'}} src={b1} alt="Card img" onClick={()=>soupincredient("Tomatillo Soup")} />
           <br />
     
           <Button style={{fontFamily:'fantasy',color:'brown',textTransform:'inherit',fontSize:'30px'}} onClick={()=>soupincredient("Tomatillo Soup")} >Tomatillo Soup
           </Button>
           </CardContent>   
               
   </Card>
    </div>
   <div class='col-lg-4'>
   <Card sx={{ maxWidth: 400 }} style={{marginLeft:'90px',backgroundColor:'white',borderRadius:'10px',height:'380px',width:'300px'}}>
           
           <CardContent>
           <img style={{width:"250px",height:"200px",borderRadius:'10px'}} src={b2} alt="Card img" onClick={()=>soupincredient("Pot Thai Chicken Soup")} />
           <br />
         
           <Button style={{fontFamily:'fantasy',color:'brown',textTransform:'inherit',fontSize:'30px'}} onClick={()=>soupincredient("Pot Thai Chicken Soup")} >Pot Thai Chicken Soup
           </Button>
     
           </CardContent>       
   </Card>
   </div>
   <div class='col-lg-4'>
   <Card sx={{ maxWidth: 400 }} style={{backgroundColor:'white',borderRadius:'10px',height:'380px',width:'300px'}}>
           
           <CardContent>
           <img style={{width:"250px",height:"200px",borderRadius:'10px'}} src={b3} alt="Card img" onClick={()=>soupincredient("Pot Asparagus Brie Soup")}/>
           <br />
         
           <Button style={{fontFamily:'fantasy',color:'brown',textTransform:'inherit',fontSize:'30px'}} onClick={()=>soupincredient("Pot Asparagus Brie Soup")} >Pot Asparagus Brie Soup
           </Button>
       
           </CardContent>       
   </Card>
   </div>
   
   <div class='col-lg-4'>
     <br />
   <Card sx={{ maxWidth: 400 }} style={{marginLeft:'190px',backgroundColor:'white',borderRadius:'10px',height:'330px',width:'300px'}}>
           
           <CardContent>
           <img style={{width:"250px",height:"200px",borderRadius:'10px'}} src={b4} alt="Card img" onClick={()=>soupincredient("Cauliflower Gruyere Soup")}/>
           <br />
   
           <Button style={{fontFamily:'fantasy',color:'brown',textTransform:'inherit',fontSize:'30px'}} onClick={()=>soupincredient("Cauliflower Gruyere Soup")} >Cauliflower Gruyere Soup
           </Button>
          
           </CardContent>       
   </Card>
   </div>
   <div class='col-lg-4'>
     <br />
   <Card sx={{ maxWidth: 400 }} style={{marginLeft:'90px',backgroundColor:'white',borderRadius:'10px',height:'330px',width:'300px'}}>
           
           <CardContent>
           <img style={{width:"250px",height:"200px",borderRadius:'10px'}} src={b5} alt="Card img" onClick={()=>soupincredient("Broccoli Cheese Soup")}/>
           <br />
      
           <Button style={{fontFamily:'fantasy',color:'brown',textTransform:'inherit',fontSize:'30px'}} onClick={()=>soupincredient("Broccoli Cheese Soup")} >Broccoli Cheese Soup
           </Button>
        
           </CardContent>       
   </Card>
   </div>
   <div class='col-lg-4'>
     <br />
   <Card sx={{ maxWidth: 400 }} style={{backgroundColor:'white',borderRadius:'10px',height:'330px',width:'300px'}}>
           
           <CardContent>
           <img style={{width:"250px",height:"200px",borderRadius:'10px'}} src={b6} alt="Card img" onClick={()=>soupincredient("Red Pepper Soup")}/>
           <br />
          <Button style={{fontFamily:'fantasy',color:'brown',textTransform:'inherit',fontSize:'30px'}} onClick={()=>soupincredient("Red Pepper Soup")} >Red Pepper Soup
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

export default Soups