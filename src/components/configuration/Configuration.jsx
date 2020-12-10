import React, { useState, useEffect } from "react";
import {Checkbox, Input} from "chayns-components";
import './configuration.scss';

const Configuration = ({currentHeight, setContainerHeight}) => {

    const [desktopHeight, setDesktopHeight] = useState(0)
    const [mobileHeight, setMobileHeight] = useState(0);
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        setDesktopHeight(currentHeight);
        if (!isFixed) {
            setMobileHeight((currentHeight / 3).toFixed(0));
        }
    }, [currentHeight]);

    useEffect(() => {
        if (!isFixed) {
            setMobileHeight((desktopHeight / 3).toFixed(0));
        }
    }, [desktopHeight]);

    return (
        <div className="container">
            <div className="input-wrapper">
                <p>Desktop</p>
                <Input
                    className="input--desktop"
                    design={1}
                    dynamic={1}
                    placeholder="Pixel"
                    value={desktopHeight}
                    onChange={(value) => {
                        setDesktopHeight(value);
                        setContainerHeight(value);
                    }}
                />
            </div>
            <div style={{ marginTop: '5px' }} />
            <div className="input-wrapper">
                <p>Mobil</p>
                <Input
                    className={isFixed ? 'input--desktop' : 'input--desktop input--mobile'}
                    design={1}
                    dynamic={1}
                    placeholder="Pixel"
                    value={mobileHeight}
                    onChange={(value) => {
                        setMobileHeight(value);
                        setIsFixed(true);
                    }}
                />
            </div>
            <div style={{ marginTop: '10px' }} />
            <Checkbox label="Als Standard festlegen" />
        </div>
    );
};

export default Configuration;
