import { AppBar, Button, IconButton, Toolbar, Tooltip, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import logo from "../images/logo2.png";
import '../components/style.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import TableViewSharpIcon from '@mui/icons-material/TableViewSharp';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import HomeIcon from '@mui/icons-material/Home';
import axios from 'axios';

const Header = () => {
  const[cuisines,setCuisines]=useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
    axios.get("http://localhost:3003/viewcuisines")
    .then((response)=>{
        setCuisines(response.data);
    })
   },[]);


  const findrecipe=(e)=>{
  navigate('/searchrecipe',{state: {recipename:e.target.value}});
  }

  const gotorecipes=(cuisinename)=>{
  navigate('/viewrecipes',{state: {cuiname:cuisinename}});
  }

  return (
    <div style={{marginBottom:'90px'}}>
     <AppBar className='nav'>
        <Toolbar>
        <img height='80px' src={logo} alt="recipe-logo" />&nbsp;
        <Typography variant='h4' style={{fontFamily:'fantasy',color:'black'}}>Anab's Recipes</Typography>&nbsp;&nbsp;
         {/* HOME*/}
         <Button><NavLink to={'/'} style={{textDecoration:'none',fontFamily:'sans-serif',color:'black',fontSize:'20px'}}>
        <Tooltip title='Home'>
                      <IconButton>
                      <HomeIcon style={{fontSize:'40px',color:'black'}}/>
                      </IconButton>
                    </Tooltip> 
          </NavLink></Button>
          {/* CUISINES */}
          <div class="btn-group">
                  <Button type="button" class="btn  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={{border:'#128A85',color:'black'}}>
                  <Tooltip title='View Cuisines'>
                                    <IconButton>
                                    <TableViewSharpIcon style={{fontSize:'40px',color:'black'}}/>
                                    </IconButton>
                                  </Tooltip>
                  </Button>
                  <ul class="dropdown-menu">
            {cuisines.map((val,index)=>{
                                        return(
                                                                   
                                       <li><Button onClick={()=>gotorecipes(val.cuisine_name)} style={{color:'black'}}>{val.cuisine_name}</Button></li>
              
                                        )
                                    })}
                                    <li><hr class="dropdown-divider"></hr></li>
              <li><Button><Link to={'/addcuisine'} style={{textDecoration:'none',color:'black'}}>Add Cuisine</Link></Button></li>
           
                                     </ul>
             </div>
          <input type="text" placeholder='Find a Recipe' style={{width:'25%',height:'40px',marginLeft:'40%'}} onChange={findrecipe}/>
          <SearchOutlinedIcon style={{color:'black',backgroundColor:'#128A85',height:'40px',width:'40px'}}></SearchOutlinedIcon>
        
         
        </Toolbar>
     </AppBar>
    </div>
  )
}

export default Header