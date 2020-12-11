import React, {useState, useEffect} from 'react';
import Container from "./container/Container";

import './app.scss';

const App = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        chayns.getWindowMetrics().then((windowData) => {
            setData(windowData);
        });
    }, []);

    return (
        <div
            style={data ? { height: data.windowHeight - data.offsetTop - data.frameY } : { height: '100%' }}
        >
            <Container />
        </div>
    );
}

export default App;
