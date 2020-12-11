import React, { useState, useEffect } from "react";
import ResizePanel from "react-resize-panel";
import useResizeObserver from "use-resize-observer";
import Configuration from "../configuration/Configuration";
import Toolbar from "../pagemaker/toolbar/Toolbar";
import './container.scss';

const Container = () => {
    const { ref, height } = useResizeObserver();
    const [containerHeight, setContainerHeight] = useState(150);
    const [showToolbar, setShowToolbar] = useState(false);

    return (
        <>
            <div
                onMouseEnter={() => setShowToolbar(true)}
                onMouseLeave={() => setShowToolbar(false)}
            >
                <Toolbar style={showToolbar ? { display: 'none' } : { display: 'none' }} />
                <ResizePanel direction='s' handleClass="customHandle" style={{ height: containerHeight, border: '1px solid darkgrey' }}>
                    <div ref={ref} style={{height: '100%'}} />
                </ResizePanel>
            </div>
            <br />
            <Configuration currentHeight={height} />
        </>
    );
};

export default Container;
