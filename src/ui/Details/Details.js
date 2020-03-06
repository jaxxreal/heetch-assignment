import React from 'react';

import styles from './Details.module.css';

export const Details = ({ title, children }) => (
    <details className={styles.details}>
        <summary>{ title }</summary>
        <div className={styles.detailsInner}>
            { children }
        </div>
    </details>
);