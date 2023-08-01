import React from 'react'
import '../components/style.css';
import caro1 from "../images/caro2.jpeg";
import caro3 from "../images/caro3.jpeg";
import caro4 from "../images/caro5.jpeg";
import { Card, CardContent, Grid } from '@mui/material';
import bimg from "../images/burger.webp";
import simg from "../images/sauce.webp";
import soupimg from "../images/soup.webp";
import saladimg from "../images/salad.webp";
import dimg from "../images/drink.webp";
import dessertimg from "../images/dessert.webp";
import { Link } from 'react-router-dom';



const Cuisines = () => {
  return (
    <div class="row">
     <div class="col-lg-1"></div>
 <div class="col-lg-10">
  <br />
                <div id="carouselExample" class="carousel slide">
                  <div class="carousel-inner home-caro">
                    <div class="carousel-item active">
                    <img src={caro4} alt="" height={500} width={1300}/>
                    </div>
                    <div class="carousel-item">
                    <img src={caro1} alt="" height={500} width={1300}/>
                    </div>
                    <div class="carousel-item">
                     <img src={caro3} alt="" height={500} width={1300}/>
                    </div>

                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
                <div class="col-lg-1"></div>
      </div>
      <>
 <Grid container spacing={2} style={{marginBottom:"100px"}} >
 <Grid item xs={12} sm ={6} md={12} >
<div class='row'>
  <div class='col-lg-4'>
<Card sx={{ maxWidth: 400 }} style={{marginLeft:'150px',backgroundColor:'white',borderRadius:'10px',height:'300px',width:'350px'}}>
        
        <CardContent>
          <Link to='/burgers'>
          <img style={{width:"300px",height:"200px",borderRadius:'10px'}} src={bimg} alt="Card img"/>
          </Link>
          <br /><br />
          <Link to='/burgers' style={{fontFamily:'fantasy',textDecoration:'none',color:'black',fontSize:'30px'}}>Burger Recipes</Link>
        </CardContent>   
            
</Card>
 </div>
<div class='col-lg-4'>
<Card sx={{ maxWidth: 400 }} style={{marginLeft:'70px',backgroundColor:'white',borderRadius:'10px',height:'300px',width:'350px'}}>
        
        <CardContent>
        <Link to='/sauces'>
        <img style={{width:"300px",height:"200px",borderRadius:'10px'}} src={simg} alt="Card img" />
        </Link>
        <br /><br />
        <Link to='/sauces' style={{fontFamily:'fantasy',textDecoration:'none',color:'black',fontSize:'30px'}}>Sauce Recipes</Link>
        </CardContent>       
</Card>
</div>
<div class='col-lg-4'>
<Card sx={{ maxWidth: 400 }} style={{backgroundColor:'white',borderRadius:'10px',height:'300px',width:'350px'}}>
        
        <CardContent>
        <Link to='/soups'>
        <img style={{width:"300px",height:"200px",borderRadius:'10px'}} src={soupimg} alt="Card img" />
        </Link>
        <br /><br />
        <Link to='/soups' style={{fontFamily:'fantasy',textDecoration:'none',color:'black',fontSize:'30px'}}>Soup Recipes</Link>
        </CardContent>       
</Card>
</div>

<div class='col-lg-4'>
  <br />
<Card sx={{ maxWidth: 400 }} style={{marginLeft:'150px',backgroundColor:'white',borderRadius:'10px',height:'300px',width:'350px'}}>
        
        <CardContent>
        <Link to='/salads'>
        <img style={{width:"300px",height:"200px",borderRadius:'10px'}} src={saladimg} alt="Card img"/>
        </Link>
        <br /><br />
        <Link to='/salads' style={{fontFamily:'fantasy',textDecoration:'none',color:'black',fontSize:'30px'}}>Salad Recipes</Link>
        </CardContent>       
</Card>
</div>
<div class='col-lg-4'>
  <br />
<Card sx={{ maxWidth: 400 }} style={{marginLeft:'70px',backgroundColor:'white',borderRadius:'10px',height:'300px',width:'350px'}}>
        
        <CardContent>
        <Link to='/drinks'>
        <img style={{width:"300px",height:"200px",borderRadius:'10px'}} src={dimg} alt="Card img"/>
        </Link>
        <br /><br />
        <Link to='/drinks' style={{fontFamily:'fantasy',textDecoration:'none',color:'black',fontSize:'30px'}}>Drink Recipes</Link>
        </CardContent>       
</Card>
</div>
<div class='col-lg-4'>
  <br />
<Card sx={{ maxWidth: 400 }} style={{backgroundColor:'white',borderRadius:'10px',height:'300px',width:'350px'}}>
        
        <CardContent>
        <Link to='/desserts'>
        <img style={{width:"300px",height:"200px",borderRadius:'10px'}} src={dessertimg } alt="Card img"/>
        </Link>
        <br /><br />
        <Link to='/desserts' style={{fontFamily:'fantasy',textDecoration:'none',color:'black',fontSize:'30px'}}>Dessert Recipes</Link>
        </CardContent>       
</Card>
</div>
</div>

</Grid>

 </Grid>
 </>
</div>

  )
}

export default Cuisines