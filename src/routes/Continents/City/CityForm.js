import React from 'react';

import { Input } from '../../../ui/Input';

export const CityForm = ({ onChange, name, description, countryCode }) => (<>
    <Input
        label="Name"
        name="name"
        onChange={onChange}
        value={name}
    />
    <Input
        label="Description"
        name="description"
        onChange={onChange}
        value={description}
    />
    <Input
        label="Country Code"
        name="countryCode"
        onChange={onChange}
        value={countryCode}
    />
</>);