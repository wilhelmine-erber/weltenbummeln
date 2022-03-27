import React from "react";
import Picture from "./Picture";
import Description from "./Description";
import Offers from "./Offers";
import Comments from "./Comments/Comments";
import Container from "@material-ui/core/Container";
import './Details.css';
import Map from "./Map/Map";


const Details = () => {

    return (
        <Container>
            
            <div className="component_border">
                <Picture />
            </div>

            <div className="component_border">
                <Description />
            </div>

            <div className="component_border">
                <Offers />
            </div>

            <div className="component_border">
                <Comments />
            </div>

            <div className="component_border">
                <Map />
            </div>


        </Container>
    );
};

export default Details;