import React from 'react';
//import { useLocation, useParams } from 'react-router-dom';

const Title = () => {

    // const params = useParams(); // URL id
    // const { state } = useLocation(); // props Daten des Items

   // console.log(state);

    return (
        <div>
            <h1>hier Komponente für kurze Beschreibung</h1>
            {/* Zugriff auf Daten mit : */}
            {/* <p>{params.id}</p>
            <h2>{state.type}</h2> */}
        </div>
    )
}

export default Title;