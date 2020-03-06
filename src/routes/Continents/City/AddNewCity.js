import React from 'react';

import { Form } from '../../../ui/Form';
import styles from '../../../ui/Details/Details.module.css';
import { CityForm } from './CityForm';

export const AddNewCity = (props) => {
    const [state, _setState] = React.useState({
        name: props.name || '',
        description: props.description || '',
        countryCode: props.countryCode || ''
    });
    const [isSaving, setSaving] = React.useState(false);
    const [errors, setErrors] = React.useState([]);

    function setState(changes) {
        _setState({ ...state, ...changes });
    }

    function handleChange(ev) {
        setState({ [ev.target.name]: ev.target.value });
    }

    function resetForm() {
        _setState({
            name: '',
            description: '',
            countryCode: '',
        });
    }

    function collectErrors() {
        const errs = [];
        if (state.name.length === 0) {
            errs.push('Name of a city must be presented');
        }

        if (state.countryCode.length === 0) {
            errs.push('Country code must be presented');
        }

        return errs;
    }

    async function handleCitySubmit(ev) {
        ev.preventDefault();

        const errs = collectErrors();

        if (errs.length !== 0) {
            setErrors(errs);
            return;
        }

        setSaving(true);
        
        const success = await props.onCitySubmit(state);

        if (success) {
            resetForm();
        }

        setSaving(false);
    }

    return (
        <div className={styles.details}>
            <h4>Add new city</h4>
            <div className={styles.detailsInner}>
                <Form onSubmit={handleCitySubmit}>
                    <CityForm
                        onChange={handleChange}
                        name={state.name}
                        description={state.description}
                        countryCode={state.countryCode}
                    />
                    <div className="error">
                        { errors.map(e => <p key={e}>{ e }</p>) }
                    </div>
                    <button disabled={isSaving}>{ isSaving ? 'Saving...' : 'Save' }</button>
                </Form>
            </div>
        </div>
    );
};
