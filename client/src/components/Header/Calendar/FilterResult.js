import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";
import { HomepageContext } from "../../../context/context";

const FilterResults = () => {
  const { startDate, endDate, arrCards, input, dateDiff } = useContext(HomepageContext);
  const history = useHistory();

  //console.log("filterResults kriegt: ", startDate, endDate, arrCards, input)
  let cardsFiltered = arrCards;
  /* console.log(cardsFiltered) */
  const strStartDate =
    startDate &&
    `${startDate.getFullYear()}-${startDate.getMonth() + 1
    }-${startDate.getDate()}`;
  const strEndDate =
    endDate &&
    `${endDate.getFullYear()}-${endDate.getMonth() + 1}-${endDate.getDate()}`;
  if (input) {
    /* console.log("filter", strStartDate, strEndDate); */
    cardsFiltered = cardsFiltered.filter((card) => {
      let isBooked = false;
      /* console.log("card: ", card);*/
      if (input.length === 0) {
        return cardsFiltered;
      };
      // check if booked in our range
      if (card.booking) {
        if (
          (strStartDate <= card.booking.startDate &&
            strEndDate >= card.booking.startDate) ||
          (strStartDate >= card.booking.startDate &&
            strEndDate <= card.booking.endDate)
        ) {
          isBooked = true;
        }
      }
      return (
        !isBooked && card.ort.toLowerCase().includes(input.toLowerCase())
      )
    });

    /* console.log("es gibt keinen input, wir geben alles aus.")
    return arrCards; //Falls es keinen input gibt */
  }

  const jsxDaten = cardsFiltered.map((card, index) => {
    const goToDetails = (id) => {
      history.push("/details/" + id, card);
    };
    return (
      <div
        className="maincard"
        key={index}
        onClick={() => goToDetails(index)}
      >
        <h3 className="home_card_h3">{card.type}</h3>

        <div className="home_card_flex">
          <div className="imgCard">
            <img src={card.images.mainImg} alt="Unterkunft" />
          </div>

          <div className="contentCard">
            <p id="title">{card.title}</p>
            <p className="home_card_description">{card.shortDescription}</p>
            <div>
              <p>{card.ort}</p>
            </div>
            <div className="preisCard">
              <p>
                <span>{card.preis}</span> / Nacht
              </p>

              {startDate.getTime() !== endDate.getTime() &&
                <div>
                  <p>Reisezeit: <span>{dateDiff}</span> Tage</p>
                  <p>Gesamtbetrag: <span>{dateDiff * (parseInt(card.preis.slice(0, card.preis.indexOf('€'))))} €</span></p>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    );
  });
  return jsxDaten;
};

export default FilterResults;