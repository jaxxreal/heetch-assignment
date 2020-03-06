export function api(method, url, { headers = {}, ...options } = {}) {
    return fetch(url, {
        method,
        ...options,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            ...headers,
        }
    })
    .then(resp => resp.json());
}