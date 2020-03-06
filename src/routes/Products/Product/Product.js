import React from 'react';
import debounce from 'debounce';

import { Form } from '../../../ui/Form';
import { Details } from '../../../ui/Details';
import { ProductForm } from './ProductForm';

export const Product = (props) => {
    const [state, _setState] = React.useState({
        id: props.id,
        name: props.name || '',
        description: props.description || '',
    });

    const saveChanges = React.useMemo(() => {
        return debounce(props.onChange, 500);
    }, [props.onChange]);

    function setState(changes) {
        const nextState = { ...state, ...changes };

        _setState(nextState);
        saveChanges(nextState);
    }

    function handleChange(ev) {
        setState({ [ev.target.name]: ev.target.value });
    }

    return (
        <Details title={state.name}>
            <Form>
                <ProductForm
                    onChange={handleChange}
                    name={state.name}
                    description={state.description}
                />
            </Form>
        </Details>
    );
};
