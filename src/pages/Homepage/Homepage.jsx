import React from 'react';
import Welcome from "../../components/Welcome";
import LatestMeal from "../LatestMeal";
import RandomMeals from "../RandomMeals";
import Footer from "../../components/Footer";


const Homepage = () => {
   return (
     <div>
       <Welcome />
       <LatestMeal />
       <RandomMeals />
     </div>
   );
};

export default Homepage;