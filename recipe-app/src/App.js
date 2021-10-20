import React,{useEffect, useState} from "react";
import './App.css';
import Recipe from "./Recipe";


const App = () =>{

  const APP_ID = "66bb38ed";
  const APP_KEYS = "d8206ad8b14015c2a749c809615f79cd";

  const [recipes, setRecipes] = useState ([]);
  const [search, setSearch] = useState ('');
  const [query, setQuery] = useState ('');
  const [check, setCheck] = useState (false);
  var a = "";



  useEffect(() => {
    getRecipes();
  }, []);



  
  const getRecipes = async () =>{
    if(check === true){

     a="&diet=low-fat";


    }
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEYS}${a}`)
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits)
  }


  const handleCheck = () => {
    setCheck(!check);
  }


  const updateSearch = e => {
    setSearch (e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search); 
    setSearch ('');
    getRecipes();
  }

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form" >
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>  
        <input type="checkbox" value={check} onChange={handleCheck} /> Low-Fat 
        {/* <input type="checkbox" value={check} onChange={handleCheck} />
        <input type="checkbox" value={check} onChange={handleCheck} />
        <input type="checkbox" value={check} onChange={handleCheck} /> */}
        <button className="search-button" type="submit">Search</button>

      </form>
        <div className="recipes">
          {recipes.map((recipe) => (
            <Recipe 
            key={recipe.recipe.label}
            title={recipe.recipe.label} 
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients} />
          ))}
        </div>
    </div>
  );

};

export default App
