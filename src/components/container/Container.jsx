import React, { useState, useEffect } from "react";
import ResizePanel from "react-resize-panel";
import useResizeObserver from "use-resize-observer";
import Configuration from "../configuration/Configuration";
import Toolbar from "../pagemaker/toolbar/Toolbar";
import './container.scss';

const Container = () => {
    const { ref, height } = useResizeObserver();
    const [containerHeight, setContainerHeight] = useState(200);
    const [showToolbar, setShowToolbar] = useState(false);
    const [showConfig, setShowConfig] = useState(false);

    return (
        <>
            <div
                onMouseEnter={() => setShowToolbar(true)}
                onMouseLeave={() => setShowToolbar(false)}
                style={{ height: '100%' }}
            >
                <div style={showToolbar ? { display: 'block' } : { display: 'block' }} >
                    <Toolbar showConfig={showConfig} setShowConfig={setShowConfig} />
                </div>
                <ResizePanel direction='s' handleClass="customHandle" style={{ height: containerHeight, border: '1px solid darkgrey' }}>
                    <div ref={ref} style={{height: '100%'}} >
                        <div style={showConfig ? { display: 'block' } : { display: 'none' }}>
                            <Configuration currentHeight={height} />
                        </div>
                    </div>
                </ResizePanel>
            </div>
            <br />
        </>
    );
};

export default Container;
