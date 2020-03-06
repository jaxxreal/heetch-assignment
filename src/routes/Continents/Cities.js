import React from 'react';
import { useParams } from 'react-router-dom';

import { mapObjectToArray } from '../../utils';
import { PermissionContext } from '../../providers/PermissionProvider';
import { changeCity, createCity } from '../../resources/cities';
import { api } from '../../services/api';
import { City } from './City';
import { AddNewCity } from './City/AddNewCity';

export const Cities = () => {
    const { country } = useParams();
    const { countriesBySlug } = React.useContext(PermissionContext);

    const [isLoading, setLoading] = React.useState(true);
    const [cities, setCities] = React.useState([]);

    const getCities = React.useCallback(async() => {
        setLoading(true);
        const { getItems } = countriesBySlug[country].actions;

        const { cities } = await api(getItems.type, getItems.URL);

        setCities(mapObjectToArray(cities));
        setLoading(false);
    }, [country, countriesBySlug]);

    React.useEffect(() => {
        if (!country) {
            return;
        }

        getCities();
    }, [country, countriesBySlug, getCities]);

    function handleCityChange(changes) {
        const { id, ...payload } = changes;
        changeCity(id, payload);
    }

    async function handleCitySubmit(newCity) {
        const { success } = await createCity(newCity);

        if (success) {
            getCities();
        }

        return success;
    }

    return (
        <div>
            <h3>Cities of {countriesBySlug[country].name}</h3>
            { isLoading ? (
                <span>Loading cities of {countriesBySlug[country].name}...</span>
            ) : (
                <div>
                    {cities.map(c => (
                        <City
                            key={c.id}
                            id={c.id}
                            name={c.name}
                            description={c.description}
                            countryCode={c.countryCode}
                            onChange={handleCityChange}
                        />
                    ))}
                    <AddNewCity
                        onCitySubmit={handleCitySubmit}
                    />
                </div>
            )}
        </div>
    );
};
