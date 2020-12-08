import React, { useRef, useState, useEffect } from "react";
import ResizePanel from "react-resize-panel";
import './container.scss';
import {Button, Tooltip} from "chayns-components";
import Configuration from "../configuration/Configuration";

const Container = () => {
    const tooltip = useRef(null)

    const [showTooltip, setShowTooltip] = useState(false);

    const handleTooltip = () => {
        if (!showTooltip) {
            tooltip.show();
        } else {
            tooltip.hide();
        }
        setShowTooltip(!tooltip);
    }

    return (
        <>
            <div style={{ textAlign: 'right', marginBottom: '20px' }}>
                <Button
                    onClick={() => {
                        handleTooltip();
                    }}
                >
                    Open Tooltip
                </Button>
            </div>
            <ResizePanel direction='s' handleClass="customHandle" style={{border: '2px solid darkgrey', backgroundColor: 'lightgrey', height: '150px'}}>
                <div style={{height: '100%'}}>
                </div>
            </ResizePanel>
            <br />
            <Configuration currentHeight={60}/>
        </>
    );
};

export default Container;
