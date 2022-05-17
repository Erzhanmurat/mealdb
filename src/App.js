import {BrowserRouter, Route, Routes} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Header from "./components/Header";
import MealInfo from "./pages/MealInfo";
import MealIngredients from "./components/MealIngredients";
import Browse from "./pages/Browse";
import Footer from "./components/Footer";
import BrowseNavigation from "./components/BrowseNavigation";
import React from "react";



function App() {
  return (
    <BrowserRouter>
       <div className="main">
          <Header />
          <div className="container">
             <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/meal/:id" element={<MealInfo />} />
                <Route path="/ingredients/:name" element={<MealIngredients />} />
                <Route path="/browse/:name" element={<Browse />} />
             </Routes>
          </div>
          <BrowseNavigation />
          <Footer />
       </div>
    </BrowserRouter>
  );
}

export default App;
