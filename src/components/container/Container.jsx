import React, { useState, useEffect } from "react";
import ResizePanel from "react-resize-panel";
import useResizeObserver from "use-resize-observer";
import Configuration from "../configuration/Configuration";
import Toolbar from "../pagemaker/toolbar/Toolbar";
import './container.scss';

const Container = () => {
    const { ref, height } = useResizeObserver();
    const [containerHeight, setContainerHeight] = useState(200);

    return (
        <>
            <div
                style={{ height: '100%' }}
            >
                <Toolbar />
                <ResizePanel direction='s' handleClass="customHandle" style={{ height: containerHeight, border: '1px solid darkgrey' }}>
                    <div ref={ref} style={{height: '100%', display: 'flex', justifyContent: 'center'}} >
                        {/*<Configuration currentHeight={height} />*/}
                    </div>
                </ResizePanel>
                <div className="config--wrapper">
                    <Configuration currentHeight={height} />
                </div>
            </div>
            <br />
        </>
    );
};

export default Container;
