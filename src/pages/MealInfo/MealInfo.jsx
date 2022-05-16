import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import ReactPlayer from 'react-player'
import axios from "axios";

const MealInfo = () => {
   const [meal, setMeal] = useState({})
   const [ingredients, setIngredients] = useState([])
   const {id} = useParams()
   const getIngredients = (meal) => {
      let result = []
      for (let i = 0; i < 20; i++) {
         if (meal[`strIngredient${i + 1}`]) {
            result = [...result, meal[`strIngredient${i + 1}`]]
         }
         setIngredients(result)
      }
   }
   useEffect(() => {
      axios(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then((res) => {
           setMeal(res.data.meals[0])
           getIngredients(res.data.meals[0])
        })
   },[])
   return (
     <div className="row">
        <div className="col-4">
           <h3 className="meal-desc bold">{meal.strMeal}</h3>
           <img src={meal.strMealThumb} alt={meal.strMeal}/>
              <ReactPlayer url={meal.strYoutube} className="player"/>
        </div>
        <div className="col-6 ms">
           <h3 className="meal-desc bold">Ingredients</h3>
           <Link to={`/ingredients/${meal.strMeals}`}>
           <div className="row ms">
              {
                 ingredients.map((ingredient, idx) => (
                      <div className="col-4" key={idx}>
                         <img src={`https://www.themealdb.com/images/ingredients/${ingredient}.png`} alt=""/>
                         <h4 className="meal-title">{ingredient}</h4>
                      </div>
                 ))
              }
           </div>
           </Link>
        </div>
     </div>
   );
};

export default MealInfo;