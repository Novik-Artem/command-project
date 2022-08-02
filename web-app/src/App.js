import React from "react";
import MainPage from "./components/pages/MainPage";
import CardsPage from "./components/pages/CardsPage";
import CardPage from "./components/pages/CardPage";
import Header from "./components/organisms/Header";
import Footer from "./components/organisms/Footer";
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
