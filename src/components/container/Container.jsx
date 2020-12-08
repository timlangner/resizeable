import React, { useRef, useState, useEffect } from "react";
import ResizePanel from "react-resize-panel";
import './container.scss';
import useResizeObserver from "use-resize-observer";
import Configuration from "../configuration/Configuration";

const Container = () => {
    const { ref, height } = useResizeObserver();

    return (
        <>
            <ResizePanel direction='s' handleClass="customHandle" style={{border: '2px solid darkgrey', backgroundColor: 'lightgrey', height: '150px'}}>
                <div ref={ref} style={{height: '100%'}} />
            </ResizePanel>
            <br />
            <Configuration currentHeight={height} />
        </>
    );
};

export default Container;
