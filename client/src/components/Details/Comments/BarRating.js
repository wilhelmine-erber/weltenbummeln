import React from "react";
import PropTypes from "prop-types";


 
const RatingBar=({value, max})=>{


    

    return(
        <progress
        value={value}
        max={max}
        style={{
            height:"20px",
            width:"200px",
            marginLeft:"10px",
            
            
        
        }}
        />
    )



}

RatingBar.propTypes={
    value:PropTypes.number,
    max:PropTypes.number,
    color:PropTypes.string,
    width:PropTypes.string,
}

RatingBar.defaultProps={
    max:5,
    
}

export default RatingBar;