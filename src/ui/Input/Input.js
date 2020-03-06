import React from 'react';

import styles from './Input.module.css'

export const Input = ({ label, name, onChange, value }) => (
    <label className={styles.label}>
        <span>{ label }</span>
        <input name={name} onChange={onChange} value={value}/>
    </label>
);