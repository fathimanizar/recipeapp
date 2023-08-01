import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

const Incredients = () => {
    const location = useLocation();
    const[incredients,setIncredients]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3003/viewincredients/"+location.state.rname)
        .then((response)=>{
            setIncredients(response.data);
        })
       },[location.state.rname]);
       
  return (
   <div className='incredient'>
     {incredients.map((val,index)=>{
                                        return(
                                          <>
                                     
                                            <div class='row'>
                                            <div class='col-lg-4'>
                                              <br /><br />
                                          
                                            <img src={val.recipe_image} alt="" style={{borderRadius:'20px',height:'400px',width:'400px'}} />
                                            <br /><br />
                                            <h1 style={{fontFamily:'fantasy',color:'brown'}}>{val.recipe_name}</h1>
                                            <br /><br />
                                            </div>
                                              <div class='col-lg-7'>
                                                <br /><br /><br />
                                            <h2 style={{color:'black',fontFamily:'fantasy'}}>Incredients</h2>
                                            <br />
                                            <p style={{color:'black',fontSize:'20px',textAlign:'justify'}}>{val.incredients}</p>
                                            <br />
                                            <h2 style={{color:'black',fontFamily:'fantasy'}}>Steps</h2>
                                            <br />
                                            <p style={{color:'black',fontSize:'20px',marginBottom:'50px',textAlign:'justify'}}>{val.steps}</p>
                                            </div>
                                            <div class='col-lg-1'>
                                            
                                            </div>
                                            </div>
                                          </>
                                        )
                                    })}
                   
   </div>
    
  )
}

export default Incredients