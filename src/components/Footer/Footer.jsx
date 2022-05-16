import React from 'react';

const Footer = () => {
   return (
     <div className="main-header">
        <div className="container footer-container">
           <div className="row">
              <div className="col-3">
                 <p className="footer-desc">© 2022 TheMealDB
                    <br/>Proudly built in the UK <img src="https://www.themealdb.com/images/icons/flags/big/16/gb.png"
                                                      alt="flag" className="footer-flag"/>
                 </p>
              </div>
              <div className="col-6">
                 <a href="/https://www.thecocktaildb.com/" target="_blank"><img src="https://www.themealdb.com/images/logo-tcdb.png" alt=""/></a>
                 <a href="/https://www.theaudiodb.com//" target="_blank"><img src="https://www.themealdb.com/images/logo-tadb.png" alt=""/></a>
                 <a href="/https://www.thesportsdb.com/" target="_blank"><img src="https://www.themealdb.com/images/logo-tsdb.png" alt=""/></a>
              </div>
              <div className="col-3">
                 <nav className="footer-link">
                    <a href="#">About</a>
                    <a href="#">Fag</a>
                    <a href="#">Contact</a>
                 </nav>
              </div>
           </div>
        </div>
     </div>
   );
};

export default Footer;