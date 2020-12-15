import React from "react";
import Toolbar from "../pagemaker/toolbar/Toolbar";

const IntroHeadline = ({active, setActive}) => {
    return (
        <div
            onMouseOver={() => setActive(0)}
            onMouseLeave={() => setActive(null)}
            // style={active === 0 ? { marginTop: 0 } : { marginTop: '30px' }}
        >
            {
                active === 0 ? (
                    <Toolbar />
                ) : null
            }
            <div
                style={active === 0 ? { border: '1px solid darkgrey' } : null}
            >
                <div>
                    <h1>chayns® Design Guide</h1>
                </div>
            </div>
        </div>
    );
};

export default IntroHeadline;
