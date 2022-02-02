import PropTypes from 'prop-types';

const ColourView = ( {colour} ) => {    
    return <div style={{backgroundColor: colour, width: "30%" }}></div>
}

ColourView.propTypes = {
    colour: PropTypes.string.isRequired
}

export default ColourView;