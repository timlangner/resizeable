import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

async function init() {
    try {
        await chayns.ready;
        await chayns.disallowRefreshScroll();
        await chayns.invokeCall({ action: 0, value: { enabled: false } });

        ReactDOM.render(
            <App />,
            document.querySelector('.tapp')
        );
    } catch (err) {
        // eslint-disable-next-line no-console
        console.warn('no chayns environment found', err);
    }
}

init();
