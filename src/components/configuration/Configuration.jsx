import React, { useState, useEffect } from "react";
import './configuration.scss';
import {Checkbox, Input} from "chayns-components";

const Configuration = ({currentHeight}) => {

    const [mobileHeight, setMobileHeight] = useState();

    useEffect(() => {
        setMobileHeight((currentHeight / 3).toFixed(0));
    }, [currentHeight]);

    return (
        <div className="container">
            <div className="input-wrapper">
                <p>Desktop</p>
                <Input
                    className="input--desktop"
                    design={1}
                    dynamic={1}
                    placeholder="Pixel"
                    value={currentHeight}
                />
            </div>
            <div style={{ marginTop: '5px' }} />
            <div className="input-wrapper">
                <p>Mobil</p>
                <Input
                    className="input--desktop"
                    design={1}
                    dynamic={1}
                    placeholder="Pixel"
                    value={mobileHeight}
                    disabled
                />
            </div>
            <div style={{ marginTop: '10px' }} />
            <Checkbox label="Als Standard festlegen" />
        </div>
    );
};

export default Configuration;
