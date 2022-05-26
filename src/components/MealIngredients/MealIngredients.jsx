import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useParams} from "react-router-dom";


const MealIngredients = () => {
   const [ingredients,setIngredients] = useState({})
   const {slug} = useParams()
   useEffect(() => {
      axios(`https://www.themealdb.com/api/json/v2/1/filter.php?i=${slug}`)
        .then((res) => setIngredients(res.data))
   },[slug])
   if (!ingredients.meals){
      return "Loading..."
   }
   return (
     <div className="container">
        <div className="row">
           <div  className="col-4">
              <h2 className="meal-title">{slug}</h2>
              <img src={`https://www.themealdb.com/images/ingredients/${slug}.png`} alt=""/>
           </div>
           <div className="col-6">
              <h2 className="meal-title">Meals</h2>
              <div className="row">
                 {
                    ingredients.meals.map((ingredient,idx) => (
                      <div className="col-4 meal" key={idx}>
                         <Link style={{textDecoration: 'none',color:'white'}} to={`/meal/${ingredient.idMeal}`} key={idx}>
                            <img src={`${ingredient.strMealThumb}`} alt=""/>
                            <h4 className="meal-title">{ingredient.strMeal}</h4>
                         </Link>
                      </div>
                    ))
                 }
              </div>
           </div>
        </div>
     </div>
   )
};

export default MealIngredients;