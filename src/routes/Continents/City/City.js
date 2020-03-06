import React from 'react';
import debounce from 'debounce';

import { CityForm } from './CityForm';
import { Details } from '../../../ui/Details';
import { Form } from '../../../ui/Form';

export const City = (props) => {
    const [state, _setState] = React.useState({
        id: props.id,
        name: props.name || '',
        description: props.description || '',
        countryCode: props.countryCode || ''
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
                <CityForm
                    onChange={handleChange}
                    name={state.name}
                    description={state.description}
                    countryCode={state.countryCode}
                />
            </Form>
        </Details>
    );
};
