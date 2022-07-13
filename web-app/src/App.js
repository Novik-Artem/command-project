import React from "react";
import MainPage from "./Components/pages/MainPage";
import CardsPage from "./Components/pages/CardsPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/cardsPage" element={<CardsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
