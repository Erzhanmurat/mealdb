import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

const LatestMeal = () => {
   const [latestMeal, setLatestMeals] = useState([])
   useEffect(() => {
      axios('https://www.themealdb.com/api/json/v2/1/latest.php')
        .then((res) => setLatestMeals(res.data.meals))
   },[])
   return (
     <div>
        <h3 className="meal-desc">LatestMeal</h3>
        <div className="row">
           {
               latestMeal.map((meal) => (
                 <div className="col-3 meal" key={meal.idMeal}>
                    <Link to={`/meal/${meal.idMeal}`}>
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

export default LatestMeal;