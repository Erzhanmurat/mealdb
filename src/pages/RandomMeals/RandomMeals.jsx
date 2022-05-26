import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

const RandomMeals = () => {
   const [randomMeal, setRandomMeal] = useState([])
   useEffect(() => {
      axios('https://www.themealdb.com/api/json/v2/1/randomselection.php')
        .then((res) => setRandomMeal(res.data.meals))
   },[])
   return (
     <div>
        <h3 className="meal-desc">RandomMeal</h3>
        <div className="row">
           {
              randomMeal.map((meal) => (
                <div className="col-3 meal" key={meal.idMeal}>
                   <Link to={`/meal/${meal.idMeal}`} style={{ textDecoration: 'none' }}>
                      <img src={meal.strMealThumb} alt={meal.strMeal}/>
                      <h4 className="meal-title">{meal.strMeal}</h4>
                   </Link>
                </div>
              ))
           }
        </div>
        <img src="https://www.themealdb.com/images/separator.jpg" alt="line" className="welcome-line"/>
     </div>
   );
};

export default RandomMeals;