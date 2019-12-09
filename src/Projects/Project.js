import React from 'react';
import styles from './Projects.module.css';

function Project(props) {
    return (
        <div className={styles.project}>
            <div className={styles.image} style={props.style}>
                <a className={styles.showButton} href={props.href}>Look at</a>
            </div>
            <span className={styles.projectTitle}>{props.info.title}</span>
            {/*<span className={styles.description}>{props.info.description}</span>*/}
        </div>
    );
}

export default Project;
