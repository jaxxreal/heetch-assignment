import { api } from '../services/api';

export function changeProduct(id, { name, description }) {
    return api('PUT', `https://heetchfrontendtest.now.sh/@jaxxreal/products/${id}`, {
        body: JSON.stringify({ name, description }),
    });
}

export function createProduct({ name, description }) {
    return api('POST', `https://heetchfrontendtest.now.sh/@jaxxreal/products`, {
        body: JSON.stringify({ name, description }),
    });
}