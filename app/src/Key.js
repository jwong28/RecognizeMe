import React from 'react';

// IMPORTANT FOR ERIC/Serena don't touch Piano.js
// If you want to test ur key.js, go to index.js and switch <App /> to <Key />
const Key = props => {
    /** 
     *  props wil have attributes
     *  {
     *      color: Whether white or black
     *      position: a number representing which octave the key belongs in
     *      note: a letter representing the note being played
     *      handleClick: used to call parent function to handle a click
     *  }
     * */
    
    // Object destructuring
    const { color, position, note } = props;

    // Styling the keys.
    const styling = {
        backgroundColor: color,
        height: '100px',
        width: '5px',
        display: 'inline-block',
        margin: '15px 1px 0px 1px',
    }

    /**
     *  When clicked, make key temporarily turn a different color, and send information up to playNote method
     *  The playNote method takes 2 parameters
     *  Key: String
     *  Duration: String
     *  Example: Key='C4', Duration='8n' would play a C key in the 4th octave for 1/8th of a note
     *           Key='B#4', Duration='4n' would play a B sharp on the 4th octave for 1/4th of a note
     *  */
    const handleClick = () => {
        // For now, we'll make duration 1/4th of a note. Will change in future
        props.handleClick(color+position,'4n');
    }

    return (
        <>
            <div onClick={e => handleClick()} style={styling}>
                {note}
            </div>
        </>
    );
}
export default Key;