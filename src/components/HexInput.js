import { useState } from "react";
import PropTypes from 'prop-types';

const HexInput = ({text, isDisabled, handleSubmit, label}) => {
    const [value, setValue] = useState("");

    return (
        <form onSubmit={() => handleSubmit(value)}>
            <label for="hex">{ label }</label>
            <input value={text} disabled={isDisabled} onChange={e => setValue(e.target.value)}
            style={{marginRight: 10}} />
        </form>
    );
}

HexInput.propTypes = {
    text: PropTypes.string,
    isDisabled: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func,
    label: PropTypes.string,
}

export default HexInput;