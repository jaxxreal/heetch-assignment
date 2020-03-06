import React from 'react';
import { Route, NavLink, useRouteMatch } from 'react-router-dom';

import { PermissionContext } from '../../providers/PermissionProvider';
import { Countries } from './Countries';
import { mapObjectToArray } from '../../utils';

export const Continents = () => {
    const match = useRouteMatch();
    const { permissions: { continents: { children } } } = React.useContext(PermissionContext);

    const continents = mapObjectToArray(children);

    return (
        <div>
            <h1>Continents</h1>
            { continents.map(c => c.actions.show ? (
                <NavLink
                    key={c.name}
                    to={match.path + c.name}
                    activeClassName="active"
                    style={{marginLeft: '10px'}}
                >
                    { c.name }
                </NavLink>
            ) : null) }
            <Route
                path={`${match.url}/:continent`}
                component={Countries}
            />
        </div>
    );
};