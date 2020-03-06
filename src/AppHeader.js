import React from 'react';
import { Link } from 'react-router-dom';

import { PermissionContext } from './providers/PermissionProvider';

export const AppHeader = () => {
    const { appRoutes } = React.useContext(PermissionContext);
    return (
        <header className="App-header">
            <Link to="/">Home</Link>
            { appRoutes.map(item => <Link key={item.slug} to={item.slug}>{ item.linkText }</Link>) }
        </header>
    );
}