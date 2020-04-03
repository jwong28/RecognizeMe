import React from 'react';

// IMPORTANT FOR ERIC/Serena don't touch Piano.js
// If you want to test ur key.js, go to index.js and switch <App /> to <Key />
const Key = props => {
    /** 
     *  props wil have attributes
     *  {
     *      color: Whether white or black
     *      position: a number representing which octave the key belongs in
     *      key: a letter representing the key being played
     *      handleClick: used to call parent function to handle a click
     *  }
     * */

    // Styling the keys.
    const styling = {
        
    }

    // When clicked, make key temporarily turn a different color, and send information up to app to play a sound
    const handleClick = event => {

    }

    return (
        <>
            <div onClick={e => handleClick(e)} style={styling}>

            </div>
        </>
    );
}
export default Key;