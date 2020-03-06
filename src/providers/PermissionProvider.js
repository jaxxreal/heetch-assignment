import React from 'react';
import { getPermissions } from '../resources/permissions';

const defaultContext = { permissions: {}, countriesBySlug: {}, appRoutes: [] };

export const PermissionContext = React.createContext(defaultContext);

export function PermissionProvider({ children }) {
    const [context, setContext] = React.useState(defaultContext);

    React.useEffect(() => {
        async function loadPermissions() {
            const permissions = await getPermissions();

            const appRoutes = Object.keys(permissions).map(k => {
                const { order, slug = `/${k}/` } = permissions[k];
                return {
                    name: k,
                    linkText: k,
                    order,
                    slug, 
                };
            });

            const countriesBySlug = Object.keys(permissions.continents.children).reduce((result, continentKey) => {
                const continent = permissions.continents.children[continentKey];

                Object.keys(continent.children).forEach(countryKey => {
                    const country = continent.children[countryKey];
                    const slugParts = country.slug.split('/')
                    const countrySlug = slugParts[slugParts.length - 1];

                    result[countrySlug] = country;
                });

                return result;
            }, {});

            appRoutes.sort((prev, curr) => prev.order - curr.order);

            setContext({ permissions, appRoutes, countriesBySlug });
        }

        loadPermissions();
    }, []);

    return (
        <PermissionContext.Provider value={context}>
            { children }
        </PermissionContext.Provider>
    );
}