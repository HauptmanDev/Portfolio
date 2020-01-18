import React from 'react';
import styles from './Projects.module.css';

function Project(props) {
    return (
        <div className={styles.project}>
            <div className={styles.image} style={props.info.image}>
                <a className={styles.showButton} href={props.info.href} target='_blank'>Look at</a>
            </div>
            <div className={styles.projectInfo}>
                <span className={styles.projectTitle}>{props.info.title}</span>
                <span>({props.info.description})</span>
            </div>
        </div>
    );
}

export default Project;
