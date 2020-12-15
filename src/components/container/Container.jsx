import React, { useState, useEffect } from "react";
import ResizePanel from "react-resize-panel";
import useResizeObserver from "use-resize-observer";
import Configuration from "../configuration/Configuration";
import Toolbar from "../pagemaker/toolbar/Toolbar";
import './container.scss';

const Container = () => {
    const { ref, height } = useResizeObserver();
    const [containerHeight, setContainerHeight] = useState(175);
    const [isActive, setIsActive] = useState(false);
    const [isMouseDown, setIsMouseDown] = useState(false);

    useEffect(() => {
        if (height) setContainerHeight(height + 2);
    }, [height]);

    return (
        <>
            <div style={{ height: '100%' }}>
                {/*Fake Div*/}
                <div
                    style={!isActive ? { height: containerHeight + 40 } : null }
                    onMouseOver={() => {
                        setIsActive(true);
                    }}
                />
                {/*Resizeable Div*/}
                <div
                    style={isActive ? { display: 'block' } : { display: 'none' }}
                    onMouseDown={() => {
                        setIsMouseDown(true);
                        setIsActive(true);
                    }}
                    onMouseUp={() => setIsMouseDown(false)}
                    onMouseLeave={() => {
                        if (!isMouseDown) {
                            setIsActive(false);
                        }
                    }}
                >
                    <Toolbar />
                    <ResizePanel
                        direction='s'
                        handleClass="customHandle"
                        style={{ height: containerHeight, border: '1px solid darkgrey' }}
                    >
                        <div
                            ref={ref}
                            style={{height: '100%', display: 'flex', justifyContent: 'center', backgroundColor: '#e7e7e7'}}
                        >
                            <div style={height <= 120 ? { display: 'none' } : null}>
                                <div style={{ marginTop: `${height - 145}px` }}>
                                    <Configuration currentHeight={height} position={"inside"} />
                                </div>
                            </div>
                        </div>
                    </ResizePanel>
                    <div style={height > 120 ? { height: '10px'} : null} />
                    <div className="config--wrapper" style={height > 120 ? { display: 'none' } : null}>
                        <Configuration currentHeight={height} />
                        <div style={chayns.env.isDesktop ? { position: 'absolute', width: '90%' } : { position: 'absolute', width: '96.5%' }}>
                            <h1 style={{ marginTop: '20px' }}>Schreibweisen</h1>
                            <p>Zu einem ordentlichen Markenauftritt gehört nicht nur ein stimmiges Corporate Design, sondern auch ein einheitlicher Sprachgebrauch.</p>
                        </div>
                    </div>
                </div>
                <div style={!isActive ? null : height <= 120 ? { display: 'none' } : null}>
                    <h1 style={{ marginTop: '10px' }}>Schreibweisen</h1>
                    <p>Zu einem ordentlichen Markenauftritt gehört nicht nur ein stimmiges Corporate Design, sondern auch ein einheitlicher Sprachgebrauch.</p>
                </div>
            </div>
        </>
    );
};

export default Container;
