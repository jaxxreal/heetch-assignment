import React from 'react';

import { Input } from '../../../ui/Input';

export const ProductForm = ({ onChange, name, description }) => (<>
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
</>);