import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";

const Browse = () => {
   const {name} = useParams()
   const [browse, setBrowse] =useState([])
   useEffect(() => {
      axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
        .then(({data}) => setBrowse(data.meals))
   }, [])
   return (
        <div className="row">
           {
              browse.map((meal) => (
                <div key={meal.idMeal} className="col-3 meal">
                   <Link to={`/meal/${meal.idMeal}`}>
                   <img src={meal.strMealThumb} alt={meal.strMeal}/>
                   <h4 className="meal-title">{meal.strMeal}</h4>
                   </Link>
                </div>
              ))
           }
        </div>
   );
};

export default Browse;