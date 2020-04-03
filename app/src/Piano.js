import React, { useEffect } from 'react';
import Key from './Key';
import * as Tone from 'tone';

const Piano = props => {
    
    /**
     *  Array of keys.
     *  There are 88 keys on a piano
     *  52 white keys
     *  36 black keys
     *  An octave of white keys start from C -> D -> E -> F -> G -> A -> B
     */
    const keys = [];

    // Synthesizer for making music
    let synth;

    // Initializes everything before loading anything else
    useEffect(() => {
        // Creates a synth and connect it to the master output (your speakers)
        synth = new Tone.Synth().toMaster();

        let char = 'C';
        console.log(char.charCodeAt());
        for(let i=0;i<7;i++){
            setTimeout(() => {                
                // Play middle C for a duration of an 8th note
                synth.triggerAttackRelease(`${char}4`,"8n");
                char = nextCharacter(char);
            }, 1000 * i);
        }

        initializeKeys();
    }, [])

    // For this program, next character will only return uppercase characters in the range A-G
    const nextCharacter = char => {
        // Invalid character so just return A
        if(char === undefined) return 'A';

        // Represents the ascii table's decimal number
        let asciiDecimal = char.charCodeAt();

        // If character is G
        if(asciiDecimal === 71) return 'A';

        // Invalid range, range is not from A-F
        if(asciiDecimal < 65 || asciiDecimal > 70) return 'A';

        // Valid range after those checks so return next character
        return String.fromCharCode(asciiDecimal + 1);
    }

    // Function to initialize keys
    const initializeKeys = () => {

    }

    return (
        <div>

        </div>
    )
}
export default Piano;