import { Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
import logo from "../images/logo2.png";

const Footer = () => {
  return (
    <div  class="footer">
      <div class='row'>
            <div class='col-lg-4'>
            <img height='130px' src={logo} alt="recipe-logo" />
            <Typography variant='h4' style={{fontFamily:'fantasy',color:'black'}}>Anab's Recipes</Typography>
            </div>
            
              <div class='col-lg-4'>
            <br />
              <Link to='/addcuisine' style={{textDecoration:'none',color:"black"}}>Add Cuisine</Link>
            <br /><br />
            <Link to='/addrecipe' style={{textDecoration:'none',color:"black"}}>Add Recipe</Link>
            <br /><br />
             <FacebookIcon/>&nbsp;&nbsp;
             <InstagramIcon/>&nbsp;&nbsp;
             <TwitterIcon/>&nbsp;&nbsp;
             <YouTubeIcon/>&nbsp;&nbsp;
             <PinterestIcon/>
            </div>

            <div class='col-lg-4'>
            <br />
            <p>About Us</p>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Contact Us</p>
            
            </div>
      </div>
      <Typography style={{paddingTop:'10px',fontFamily:'fantasy',backgroundColor:"white"}}>Recipe App © 2023</Typography>
    </div>
  )
}

export default Footer