import React from "react";
import Toolbar from "../pagemaker/toolbar/Toolbar";

const IntroText = ({active, setActive}) => {
    return (
        <div
            onMouseOver={() => setActive(1)}
            onMouseLeave={() => setActive(null)}
        >
            {
                active === 1 ? (
                    <Toolbar />
                ) : null
            }
            <div
                style={active === 1 ? { border: '1px solid darkgrey' } : null}
            >
                <div>
                    <p style={{ marginTop: '10px' }}>Dieser Design Guide ist das zentrale Element der Identität und prägt das visuelle Erscheinungsbild und die Usability von chayns®. Dies zeichnet sich durch den konsequenten Einsatz und das optimale Zusammenspiel der Basiselemente wie Farbe, Typografie und Layout aus. </p>
                </div>
            </div>
        </div>
    );
};

export default IntroText;
