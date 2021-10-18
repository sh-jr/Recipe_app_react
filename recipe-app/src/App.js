import React,{useEffect, useState} from "react";
import './App.css';
import Recipe from "./Recipe";


const App = () =>{

  const APP_ID = "66bb38ed";
  const APP_KEYS = "d8206ad8b14015c2a749c809615f79cd";

  const [recipes, setRecipes] = useState ([]);

  useEffect(() => {
    getRecipes();
    
  }, []);
  
  const getRecipes = async () =>{
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEYS}`)
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits)
    console.log(recipes,"recepti")
    
  }



  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />  
        <button className="search-button" type="subbmit">Search</button>
      </form>
      {recipes.map((recipe, ind) => (
        <Recipe key={ind}/>
      ))}
    </div>
  );

};

export default App
