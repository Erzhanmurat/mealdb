import React from 'react';
import {Link} from "react-router-dom";

const BrowseNavigation = () => {
   const alphabet = "abcdefghijklmnopqrstuvwxyz".split('')
   return (
     <div className="center">
        <h3 className="meal-desc">Browse By Name</h3>
        {
           alphabet.map((item) => (
                <Link to={`/browse/${item}`} key={item} className="alphabet">{item.toUpperCase()}<span>/</span></Link>
           ))
        }
     </div>
   );
};

export default BrowseNavigation;