import React, { useState, useEffect } from "react";
import ResizePanel from "react-resize-panel";
import useResizeObserver from "use-resize-observer";
import Configuration from "../configuration/Configuration";
import Toolbar from "../pagemaker/toolbar/Toolbar";
import './container.scss';

const Container = () => {
    const { ref, height } = useResizeObserver();
    const [containerHeight] = useState(170);

    return (
        <>
            <div style={{ height: '100%' }}>
                <Toolbar />
                <ResizePanel
                    direction='s'
                    handleClass="customHandle"
                    style={{ height: containerHeight, border: '1px solid darkgrey' }}
                >
                    <div ref={ref} style={{height: '100%', display: 'flex', justifyContent: 'center'}} >
                        <div style={height <= 120 ? { display: 'none' } : null}>
                            <div style={{ marginTop: `${height - 145}px` }}>
                                <Configuration currentHeight={height} position={"inside"} />
                            </div>
                        </div>
                    </div>
                </ResizePanel>
                <div className="config--wrapper" style={height > 120 ? { display: 'none' } : null}>
                    <Configuration currentHeight={height} />
                    <div style={{ position: 'absolute', width: '90%' }}>
                        <h1 style={{ marginTop: '10px' }}>Schreibweisen</h1>
                        <p>Zu einem ordentlichen Markenauftritt gehört nicht nur ein stimmiges Corporate Design, sondern auch ein einheitlicher Sprachgebrauch.</p>
                    </div>
                </div>
                <div style={height <= 120 ? { display: 'none' } : null}>
                    <h1 style={{ marginTop: '10px' }}>Schreibweisen</h1>
                    <p>Zu einem ordentlichen Markenauftritt gehört nicht nur ein stimmiges Corporate Design, sondern auch ein einheitlicher Sprachgebrauch.</p>
                </div>
            </div>
        </>
    );
};

export default Container;
