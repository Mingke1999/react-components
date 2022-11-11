import React from 'react';
/**
 * check if water is boiling
 * @param {*} props.celsius velsius input from user or converted by fahrenheit
 * @returns judgement
 */
function BoilingVerdict(props) {
    if (props.celsius >= 100) 
    {
        return <p>The water would boil.</p>;
    }
      return <p>The water would not boil.</p>;
}

export default BoilingVerdict;