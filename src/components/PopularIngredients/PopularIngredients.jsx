import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

const PopularIngredients = () => {
   const [popularIngredients, setPopularIngredients] = useState([])
   useEffect(() => {
      axios('https://www.themealdb.com/api/json/v2/1/filter.php?i=chicken_breast,garlic,salt')
        .then((res) => setPopularIngredients(res.data.meals))
   },[])
   return (
     <div>
        <h3 className="meal-desc">RandomMeal</h3>
        <div className="row">
           {
              popularIngredients.map((meal) => (
                <div className="col-3 meal" key={meal.idMeal}>
                   <Link to="/" style={{ textDecoration: 'none' }}>
                      <img src={meal.strMealThumb} alt={meal.strMeal}/>
                      <h4 className="meal-title">{meal.strMeal}</h4>
                   </Link>
                </div>
              ))
           }
        </div>
     </div>
   );
};

export default PopularIngredients;