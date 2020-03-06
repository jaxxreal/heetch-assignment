import { api } from '../services/api';

export function getPermissions() {
    return api('GET', 'https://heetchfrontendtest.now.sh/@jaxxreal/permissions');
}