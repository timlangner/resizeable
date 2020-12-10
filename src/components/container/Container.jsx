import React, { useState, useEffect } from "react";
import ResizePanel from "react-resize-panel";
import useResizeObserver from "use-resize-observer";
import Configuration from "../configuration/Configuration";
import './container.scss';

const Container = () => {
    const { ref, height } = useResizeObserver();
    const [containerHeight, setContainerHeight] = useState(150);

    return (
        <>
            <ResizePanel direction='s' handleClass="customHandle" style={{ height: containerHeight, border: '2px solid darkgrey', backgroundColor: 'lightgrey' }}>
                <div ref={ref} style={{height: '100%'}} />
            </ResizePanel>
            <br />
            <Configuration currentHeight={height} />
        </>
    );
};

export default Container;
