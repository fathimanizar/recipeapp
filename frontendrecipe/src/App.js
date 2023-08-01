
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Cuisines from './components/Cuisines';
import Addcuisine from './components/Addcuisine';
import Recipes from './components/Recipes';
import Addrecipe from './components/Addrecipe';
import Searchedrecipe from './components/Searchedrecipe';
import Burgers from './components/Burgers';
import Sauces from './components/Sauces';
import Soups from './components/Soups';
import Salads from './components/Salads';
import Drinks from './components/Drinks';
import Desserts from './components/Desserts';
import Incredients from './components/Incredients';



function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route path='/' element={<Cuisines/>}/>
          <Route path='/viewrecipes' element={<Recipes/>}/>
          <Route path='/addrecipe' element={<Addrecipe data={{cuisine_name:'',recipe_name:'',recipe_duration:'',recipe_servings_no:'',recipe_image:''}} method='post'/>} />
          <Route path='/addcuisine' element={<Addcuisine data={{cuisine_name:'',cuisine_duration:'',cuisine_servings_no:'',cuisine_image:''}} method='post'/>}/>
          <Route path='/searchrecipe' element={<Searchedrecipe/>}/>
          <Route path='/burgers' element={<Burgers/>}/>
          <Route path='/sauces' element={<Sauces/>}/>
          <Route path='/soups' element={<Soups/>}/>
          <Route path='/salads' element={<Salads/>}/>
          <Route path='/drinks' element={<Drinks/>}/>
          <Route path='/desserts' element={<Desserts/>}/>
          <Route path='/incredients' element={<Incredients/>}/>

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
