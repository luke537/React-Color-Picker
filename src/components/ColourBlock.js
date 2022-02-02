import PropTypes from 'prop-types';

const ColourBlock = ( {colour, handleClick} ) => {
    return (
        <div key={colour} style={{ backgroundColor: colour, width: 30, height: 30 }} 
        onClick={() => handleClick(colour)}></div>
    );
}

ColourBlock.propTypes = {
    colour: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired
};

export default ColourBlock;