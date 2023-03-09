import * as React from 'react';
import Timer from '../../components/timer';

function SinglePlayer() {
    return (
    <div>
        <h1>Who's That Pokemon Single Player Mode</h1>
        <Timer seconds={10}/>
    </div>
    );
}

export default SinglePlayer;