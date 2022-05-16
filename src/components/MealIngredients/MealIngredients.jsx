import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useParams} from "react-router-dom";

const MealIngredients = () => {
   const [mealIngredient, setMealIngredient] = useState({})
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
      axios(`https://www.themealdb.com/api/json/v1/1/filter.php?i=onion`)
        .then((res) => {
           setMealIngredient(res.data.meals[0])
           getIngredients(res.data.meals[0])
        })
   })
   return (
     <div className="row">
        <div className="col-4">
           <h3 className="meal-desc bold">{mealIngredient.strMeal}</h3>
           <img src={mealIngredient.strMealThumb} alt={mealIngredient.strMeal}/>
        </div>
        <div className="col-6 ms">
           <h3 className="meal-desc bold">Ingredients</h3>
           <Link to={`/meals/${mealIngredient.idMeal}`}>
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

export default MealIngredients;