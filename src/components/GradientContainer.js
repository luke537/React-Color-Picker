import ColourBlock from "./ColourBlock";
import PropTypes from 'prop-types';
import {generateColours} from "../helpers"

const GradientContainer = ( {baseColour, handleClick} ) => {
    // const addHexColor = (c1, c2) => { // uses 6 figure hex
    //     const c1NoHash = c1.replace("#", "")
    //     var hexStr = (parseInt(c1NoHash, 16) + parseInt(c2, 16)).toString(16);
    //     while (hexStr.length < 6) { hexStr = '0' + hexStr; } // Zero pad.
    //     return hexStr;
    //   }
    
    // const generateColours = (colour) => {
    //     const hexValues = []
    //     for (let i = 0; i < 200; i++) {
    //         hexValues.push("#" + addHexColor(colour, i.toString(16)))
    //     }
    //     return hexValues
    // }

    return (
        <div style={{ display: "flex", flexWrap: "wrap", alignContent: "flex-start", width: "50%" }}> 
            {generateColours(baseColour).map(hex => <ColourBlock colour={hex} handleClick={handleClick} />)} 
        </div>
    );
}

GradientContainer.propTypes = {
    baseColour: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired
}

export default GradientContainer;