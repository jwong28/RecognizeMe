import React, { useEffect } from 'react';
import Key from './Key';

const Piano = props => {
    
    /**
     *  Array of keys.
     *  There are 88 keys on a piano
     *  52 white keys
     *  36 black keys
     *  An octave of white keys start from C -> D -> E -> F -> G -> A -> B
     */
    const keys = [];

    // Initializes keys before loading anything else
    useEffect(() => {
        initializeKeys();
    }, [])

    // Function to initialize keys
    const initializeKeys = () => {

    }

    return (
        <div>

        </div>
    )
}
export default Piano;