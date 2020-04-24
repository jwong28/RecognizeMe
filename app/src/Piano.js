import React, { useEffect, useState } from 'react';
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
    const [keys,setKeys] = useState([]);

    // Creates a synth and connect it to the master output (your speakers)
    const synth = new Tone.Synth().toMaster();

    // CSS Styling for piano container
    const pianoStyle = {
        textAlign: 'center',
        height: `${window.innerHeight/2}px`,
        width: `${window.innerWidth}px`,
        backgroundColor: 'turquoise',
    }

    // Initializes everything before loading anything else
    useEffect(() => {
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

    // For this program, prev chararcter will only return uppercase characters in the range A-G
    const prevCharacter = char => {
        // Invalid character so just return G
        if(char === undefined) return 'G';

        // Represents the ascii table's decimal number
        let asciiDecimal = char.charCodeAt();

        // If character is A
        if(asciiDecimal === 65) return 'G';

        // Invalid range, range is not from B-G
        if(asciiDecimal < 66 || asciiDecimal > 71) return 'G';

        // Valid range after those checks so return prev character
        return String.fromCharCode(asciiDecimal - 1);
    }

    // Plays the sound responsing to the according key input
    const playNote = (key,duration) => {
        // For now, will have half a second delay in between notes 
        synth.triggerAttackRelease(key,duration);
    }

    // Function to initialize keys
    const initializeKeys = () => {
        // The first key on the piano
        let char = 'A';

        // Array to store the initial keys
        let keyArr = [];

        // Index just to satisfy reacts key property
        let index = 0;

        // The 0th octave only has 3 keys, 2 white and 1 black in the middle
        for(let i=0;i<3;i++){
            let blackKey = i % 2 !== 0;
            keyArr.push(
                <Key
                    color={blackKey ? 'black' : 'white'}
                    position={0}
                    note={blackKey ? `${prevCharacter(char)}#` : `${char}`}
                    key={index++}
                    handleClick={(note,duration) => playNote(note,duration)}
                />
            );
            char = blackKey ? char : nextCharacter(char);
        }

        // The 1st through 7th octave has the same keys being repeated
        for(let octave=1;octave<=7;octave++){
            // Each octave has 3 white keys and 2 black keys alternating in the first section
            // In the second section it has 4 white keys and 3 black keys alternating as well

            // First section
            for(let i=0;i<5;i++){
                let blackKey = i % 2 !== 0;
                keyArr.push(
                    <Key
                        color={blackKey ? 'black' : 'white'}
                        position={octave}
                        note={blackKey ? `${prevCharacter(char)}#` : `${char}`}
                        key={index++}
                        handleClick={(note,duration) => playNote(note,duration)}
                    />
                );
                char = blackKey ? char : nextCharacter(char);
            }

            // Second section
            for(let i=0;i<7;i++){
                let blackKey = i % 2 !== 0;
                keyArr.push(
                    <Key
                        color={blackKey ? 'black' : 'white'}
                        position={octave}
                        note={blackKey ? `${prevCharacter(char)}#` : `${char}`}
                        key={index++}
                        handleClick={(note,duration) => playNote(note,duration)}
                    />
                );
                char = blackKey ? char : nextCharacter(char);
            }
        }

        // For the 8th octave, there is only 1 white note which is the C note
        char = nextCharacter(char);
        keyArr.push(
            <Key
                color={'white'}
                position={8}
                note={'C'}
                key={index++}
                handleClick={(note,duration) => playNote(note,duration)}
            />
        );

        setKeys(keyArr);
    }

    return (
        <div style={pianoStyle} className="keys-container">
            {keys}
        </div>
    )
}
export default Piano;