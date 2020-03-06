import React from 'react';
import { Route, NavLink, useParams, useRouteMatch } from 'react-router-dom';

import { mapObjectToArray } from '../../utils';
import { PermissionContext } from '../../providers/PermissionProvider';
import { Cities } from './Cities';

export const Countries = () => {
    const match = useRouteMatch();
    const { continent } = useParams();
    const { permissions: { continents: { children } } } = React.useContext(PermissionContext);

    if (!continent) {
        return <h3>No countries found</h3>;
    }

    const countries = mapObjectToArray(children[continent].children);

    return (
        <div>
            <h2>Countries of {continent}</h2>
            { countries.map(c => c.actions.show ? (
                <NavLink
                    activeClassName="active"
                    key={c.name}
                    to={match.url + c.slug}
                    style={{marginLeft: '10px'}}
                >
                    { c.name }
                </NavLink>
            ) : null ) }
            <Route
                path={`${match.url}/cities/:country`}
                render={props => <Cities { ...props } />}
            />
        </div>
    );
};
