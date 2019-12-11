import React from 'react';
import styles from './Projects.module.css';

function Project(props) {
    return (
        <div className={styles.project}>
            <div className={styles.image} style={props.info.image}>
                <a className={styles.showButton} href={props.info.href}>Look at</a>
            </div>
            <span className={styles.projectTitle}>{props.info.title}</span>
        </div>
    );
}

export default Project;
