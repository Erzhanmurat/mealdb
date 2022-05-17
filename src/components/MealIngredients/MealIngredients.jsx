import React, {useEffect, useState} from 'react';
import axios from "axios";
import { useParams} from "react-router-dom";

const MealIngredients = () => {
   const [ingredients, setIngredients] = useState({})
   const {name} = useParams()
   /*const getIngredients = (meal) => {
      let result = []
      for (let i = 0; i < 20; i++) {
         if (meal[`strIngredient${i + 1}`]) {
            result = [...result, meal[`strIngredient${i + 1}`]]
         }
         setIngredients(result)
      }
   }*/
   useEffect(() => {
      axios(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredients}`)
        .then(({data}) => setIngredients(data.meals[0]))
   })
   return (
    <div>

    </div>
   );
};

export default MealIngredients;