import { React, useContext } from "react";
import "./Home.css";
import FilterResults from "../Header/Calendar/FilterResult";
import { HomepageContext } from "../../../src/context/context";

const MainCards = () => {
  const { setInput } = useContext(HomepageContext);

  return (
    <div className="page-container">
      <h2
        className="home_card_h2"
        onClick={() => {
          setInput('');
        }}
      >
        Alle Unterkünfte auf einen Blick
      </h2>
      <div className="wrap"><FilterResults /></div>
    </div>
  );
  ;
}

export default MainCards;