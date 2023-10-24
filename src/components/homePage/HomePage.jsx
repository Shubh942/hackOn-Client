import React from "react";
import Header from "./header/Header";
import Jumbotron from "./jumbotron/JumboTron";
import FaqAccordion from "./faqAccordion/FaqAccordion";
import OptForm from "../Forms/optForm/OptForm";
import Footer from "./footer/Footer";
import "./homePage.scss";

//TODO:overall need to make things big or small based on screen size.

const HomePage = () => {
  const arr = { keyword: [] };

  localStorage.setItem("keyword", JSON.stringify(arr));
  return (
    <div>
      <Header />
      <Jumbotron />
      <div className="accordionContainer">
        <div className="inner">
          <h1 className="title">Frequently Asked Questions</h1>
          <FaqAccordion />
          <OptForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
