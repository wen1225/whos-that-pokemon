import * as React from 'react';
import GetRandomPokemon from '../../components/getRandomPokemon';
import Timer from '../../components/timer';

function SinglePlayerPage() {
    return (
    <div>
        <h1>Single Player Mode</h1>
        <GetRandomPokemon />
        <Timer />
    </div>
    );
}

export default SinglePlayerPage;