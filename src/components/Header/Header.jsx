import React, {useState} from 'react';
import './Header.css'
import {Link, useNavigate} from "react-router-dom";

const Header = () => {
   const [search, setSearch] = useState('')
   let navigate = useNavigate()
   const handleChange = (e) => setSearch(e.target.value)
   const handleSearch = (e) => {
      if (e.key === 'Enter') {
         navigate(`/browse/${search}`)
         setSearch('')
      }
   }
   return (
     <div className="main-header">
        <div className="container">
           <div className="row align-items--center">
                 <div className="col-6 logo-img">
                    <Link to='/'><img src={'https://www.themealdb.com/images/logo-small.png'} alt="logo"/></Link>
                 </div>
                 <div className="col-6">
                    <ul className="nav-btn">
                       <Link to='/'>
                          <li className="btn active">Home</li>
                       </Link>
                       <Link to='/'>
                          <li className="btn">API</li>
                       </Link>
                       <Link to='/'>
                          <li className="btn">Forum</li>
                       </Link>
                       <Link to='/'>
                          <li className="btn"><img src="https://www.themealdb.com/images/facebook_icon.png"
                                                   alt="facebook"/></li>
                       </Link>
                       <Link to='/'>
                          <li className="btn"><img src="https://www.themealdb.com/images/twitter_icon.png"
                                                   alt="twitter"/></li>
                       </Link>
                       <Link to='/'>
                          <li>
                             <input
                            type="text"
                            placeholder="Search"
                            className="input-search--header"
                            onChange={handleChange}
                            onKeyPress={handleSearch}
                            value={search}
                             />
                          </li>
                       </Link>
                    </ul>
                 </div>
           </div>

        </div>
     </div>
   );
};

export default Header;