import React from "react";
import MainPage from "./Components/pages/MainPage";
import CardsPage from "./Components/pages/CardsPage";
import CardPage from "./Components/pages/CardPage";
import Header from "./Components/organisms/Header";
import Footer from "./Components/organisms/Footer";
import style from "./app.module.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div className={style.wrapper}>
          <Header />
          <div className={style.main}>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/catalog" element={<CardsPage />} />
              <Route path="/catalog/:id" element={<CardPage />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
