import React from 'react';
import { useLocation } from 'react-router-dom';


const Description = () => {

    //const params = useParams(); // URL id
    const { state } = useLocation(); // props Daten des Items

    return (
        <div>
            <div
                style={{ display: "flex", marginTop: "20px" }}>

                <h2 style={{ margin: "0px" }}>{state.typeOfAcco} in { state.ort }</h2>

                <img style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "150px",
                    objectFit: "cover",
                    marginLeft: "20px",
                    border: "1px solid #eae9e8"
                }}
                    /*  className="foto-owner" */
                    src={state.owner.profImg}
                    alt="owner-bild"
                />

               
            </div>

             {/* kurze Beschreibung */}
             <h3>{state.shortDescription}</h3>
             

            {/* lange Beschreibung */}
            <p>{state.longDescription}</p>

            <p style={{ textAlign: 'right'}}>Diese Unterkunft kostet <b>{ state.preis }</b> pro Nacht.</p>
            
        </div>
    )
}

export default Description;