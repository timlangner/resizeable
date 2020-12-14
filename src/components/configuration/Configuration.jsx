import React, { useState, useEffect } from "react";
import {Checkbox, Input} from "chayns-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUnlock } from "@fortawesome/free-solid-svg-icons";
import './configuration.scss';

const Configuration = ({currentHeight, position}) => {

    const [desktopHeight, setDesktopHeight] = useState(0);
    const [mobileHeight, setMobileHeight] = useState(0);
    const [isLocked, setIsLocked] = useState(true);

    useEffect(() => {
        chayns.env.isDesktop ? setDesktopHeight(currentHeight) : setMobileHeight((currentHeight / 3).toFixed(0));
    }, [currentHeight]);

    useEffect(() => {
        if (isLocked) {
            setMobileHeight((desktopHeight / 3).toFixed(0));
        }
    }, [desktopHeight]);

    useEffect(() => {
        if (isLocked) {
            setDesktopHeight((mobileHeight * 3).toFixed(0));
        }
    }, [mobileHeight]);

    return (
        <div
            className={chayns.env.isMobile && position === "inside" ? 'container-inside--mobile' : chayns.env.isMobile ? 'container--mobile' : chayns.env.isDesktop && position === "inside" ? 'container-inside' : 'container'}
        >
            <div className="wrapper">
                <div>
                    <div className="input-wrapper">
                        <p>Desktop</p>
                        <Input
                            className="input--box"
                            type="number"
                            design={1}
                            dynamic={1}
                            placeholder="Pixel"
                            value={desktopHeight}
                            onChange={(value) => {
                                setDesktopHeight(parseInt(value));
                            }}
                        />
                    </div>
                    <div>
                        <div style={{ marginTop: '5px' }} />
                    </div>
                    <div className="input-wrapper">
                        <p>Mobil</p>
                        <Input
                            className="input--box"
                            type="number"
                            design={1}
                            dynamic={1}
                            placeholder="Pixel"
                            value={mobileHeight}
                            onChange={(value) => {
                                setMobileHeight(parseInt(value));
                            }}
                        />
                    </div>
                </div>
                <div>
                    <div>
                        <div className="upper-link--left" />
                        <div className="upper-link--bottom" />
                    </div>
                    <div
                        className="icon"
                        style={isLocked ? { color: '#818181' } : { color: 'darkgrey' }}
                        onClick={() => {
                            setIsLocked(!isLocked);
                        }}
                    >
                        <FontAwesomeIcon icon={isLocked ? faLock : faUnlock} style={{ width: '8px' }}/>
                    </div>
                    <div>
                        <div className="lower-link--top" />
                        <div className="lower-link--left" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Configuration;
