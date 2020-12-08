import React, { useState } from "react";
import ResizePanel from "react-resize-panel";
import './container.scss';

const Container = () => {
    return (
        <>
            <ResizePanel direction='s' handleClass="customHandle" style={{border: '2px solid darkgrey', backgroundColor: 'lightgrey', height: '100px'}}>
                <div style={{height: '100%'}} />
            </ResizePanel>
        </>
    );
};

export default Container;
