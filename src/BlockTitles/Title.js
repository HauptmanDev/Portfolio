import React from 'react';
// import logo from './logo.svg';
import styles from './Title.module.css';

function Title(props) {
    return (
        <div className={styles.headerTitle}>
            <span>{props.title}</span>
            <div className={styles.line}></div>
        </div>
    );
}

export default Title;
