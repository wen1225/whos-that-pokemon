import * as React from 'react';
import Timer from '../../components/timer';

function SinglePlayerPage() {
    return (
    <div>
        <h1>Single Player Mode</h1>
        <Timer seconds={10}/>
    </div>
    );
}

export default SinglePlayerPage;