import { api } from '../services/api';

export function changeCity(id, { name, description, countryCode }) {
    return api('PUT', `https://heetchfrontendtest.now.sh/@jaxxreal/cities/${id}`, {
        body: JSON.stringify({ name, description, countryCode }),
    });
}

export function createCity({ name, description, countryCode }) {
    return api('POST', `https://heetchfrontendtest.now.sh/@jaxxreal/cities`, {
        body: JSON.stringify({ name, description, countryCode }),
    });
}