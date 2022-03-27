import React from "react";

import { useLocation } from "react-router-dom";

import { GiKitchenScale } from "react-icons/gi";
import TvIcon from '@mui/icons-material/Tv';
import  SmokingRoomsIcon  from '@mui/icons-material/SmokingRooms';
import AirIcon from '@mui/icons-material/Air';
import { CgSmartHomeWashMachine } from "react-icons/cg";
import { GiLift } from "react-icons/gi";
import { BiWifi } from "react-icons/bi";
import  IronIcon  from '@mui/icons-material/Iron';
import "./Offers.css";
import  RestaurantIcon   from '@mui/icons-material/Restaurant';
import { AiOutlineClear } from "react-icons/ai"

import { GrCoatCheck } from "react-icons/gr"
/* import { FaSmokingBan } from "react-icons/fa"; */
import { v4 as uuidv4 } from 'uuid';
const icons = {
  Küche: <GiKitchenScale />,
  Waschmaschine: < CgSmartHomeWashMachine/>,
  WLAN: <BiWifi />,
  TV: <TvIcon />, 
  Aufzug: <GiLift />,
  Heizung: <GiKitchenScale />,
  Warmwasser: <GiKitchenScale />,
  GeschirrUndBesteck: <RestaurantIcon />,
  Reinigungsprodukte: <AiOutlineClear />,
  Bügeleisen: <IronIcon />,
  Föhn: <GiLift />,
  Klimaanlage: <AirIcon />,
  Kleiderbügel: <GrCoatCheck />,
  RauchenErlaubt: < SmokingRoomsIcon />,
  LangzeitaufenthalteSindMöglich: <GiKitchenScale />,
};

const Offers = () => {
  // const params = useParams(); // URL id
  const { state } = useLocation(); // props Daten des Items

  let offersObj = state.offers;

  const allOffers = () => {
    const offersJsx = [];
    //console.log(offersObj);
    for (let offer in offersObj) {
      /*  console.log(offersObj) */
      offersJsx.push(
        <p
          key={uuidv4()}
          style={{
            textDecoration:
              offersObj[offer] === false ? "line-through" : "none",
          }}
        >
          {icons[offer]} {offer}
        </p>
      );
    }
    return offersJsx;
  };

  /* const ownerOffers=()=>{

        const ownerOffer = [];

        for(let offer in offersObj){

            if(offersObj[offer]===true){
                ownerOffer.push(<p>{offer}</p>);
                console.log(ownerOffer)
                
        }
        
    }
          return ownerOffer;
    }
       
    const ownerNoOffers=()=>{

        const ownerNoOffer = [];

        for(let offer in offersObj){

            if(offersObj[offer]===false){
                ownerNoOffer.push(<p>{offer}</p>);
                console.log(ownerNoOffer)
                
        }
        
    }
          return ownerNoOffer;
    } */
  /*  const objtoArray=Array.from(offersObj)
        console.log(objtoArray) */

  return (
    <>
      <div className="offers_container">
        <h2>Das bietet dir diese Unterkunft</h2>
        <div className="liste_offers">{allOffers()}</div>
      </div>
    </>
  );
};

export default Offers;
