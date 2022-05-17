import React from 'react';
import './Welcome.css'
import PayPal from '../../assets/images/PayPal.png'

const Welcome = () => {
   return (
     <div>
        <div className='welcome'>
           <img src="https://www.themealdb.com/images/meal-icon.png" alt=""/>
           <div>
              <h1 className="welcome-title">Welcome to TheMealDB</h1>
              <p className="welcome-desc">Welcome to TheMealDB: An open, crowd-sourced database of Recipes from around the
                 world.
                 We also offer a <a href="/Api">free JSON API</a> for anyone wanting to use it, with additional features
                 for subscribers.</p>
              <a href="#" style={{ textDecoration: 'none' }}>
                 <button className="PayPal-btn"><img src={PayPal} alt="PayPal" className="PayPal-img"/><span >Подписаться</span></button>
              </a>
              <p className="welcome-desc">Click to Support $2 per month (cancel anytime) <br/>Currently 750 supporters</p>
           </div>
           <img src="https://www.themealdb.com/images/meal-icon.png" alt=""/>
        </div>
        <div>
           <img src="https://www.themealdb.com/images/separator.jpg" alt="line" className="welcome-line"/>
           <div className="form">
              <input type="text" placeholder="Search for a Meal..." className="form-input"/>
              <button><span></span></button>
           </div>
           <img src="https://www.themealdb.com/images/separator.jpg" alt="line" className="welcome-line"/>
        </div>
     </div>

   );
};

export default Welcome;