import * as React from 'react';
import {createRoot} from 'react-dom/client';

import App from './App';

const container: HTMLElement | null = document.getElementById('root');

if (container != null) {
    const root = createRoot(container);

    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}
