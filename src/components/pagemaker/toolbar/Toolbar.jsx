import React from "react";
import { Icon } from 'chayns-components/lib';
import './toolbar.scss';

const Toolbar =  () => (
    <div className="toolbar--wrapper">
        <div className="option--wrapper">
            <div className="icon--wrapper">
                <Icon icon="far fa-trash" />
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
