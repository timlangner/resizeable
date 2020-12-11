import React from "react";
import { Icon } from 'chayns-components/lib';
import './toolbar.scss';

const Toolbar =  ({showConfig, setShowConfig}) => (
    <div className="toolbar--wrapper">
        <div className="option--wrapper">
            <div className="icon--wrapper">
                <Icon icon="far fa-trash" />
            </div>
            <div className="icon--wrapper">
                <Icon
                    icon="far fa-arrows-v"
                    style={showConfig ? { color: 'var(--chayns-color--headline)' } : null}
                    onClick={() => setShowConfig(!showConfig)}
                />
            </div>
            <div className="icon--wrapper">
                <Icon icon="far fa-clone" />
            </div>
            <div className="icon--wrapper">
                <Icon icon="far fa-eye" />
            </div>
            <div className="icon--wrapper">
                <Icon icon="far fa-align-justify" />
            </div>
        </div>
    </div>
);

export default Toolbar;
