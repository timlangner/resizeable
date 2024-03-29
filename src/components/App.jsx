import React, {useState, useEffect} from 'react';
import Container from "./container/Container";
import './app.scss';
import Toolbar from "./pagemaker/toolbar/Toolbar";
import IntroHeadline from "./intro/IntroHeadline";

const App = () => {
    const [active, setActive] = useState(null);

    return (
        <div
            style={{ height: '100%' }}
        >
            <IntroHeadline active={false} setActive={setActive} />
            <p style={{ marginTop: '10px' }}>Dieser Design Guide ist das zentrale Element der Identität und prägt das visuelle Erscheinungsbild und die Usability von chayns®. Dies zeichnet sich durch den konsequenten Einsatz und das optimale Zusammenspiel der Basiselemente wie Farbe, Typografie und Layout aus. </p>
            <div style={{ textAlign: 'center', marginBottom: '-30px' }}>
                <img
                    src="https://tsimg.cloud/75508-06235/d640573f2b25f04781cdc52c493a072458798fa9_fwebp-w650.png"
                    alt="preview"
                    style={{ width: '60%' }}
                />
            </div>
            <Container />
        </div>
    );
}

export default App;
