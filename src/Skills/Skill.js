import React from 'react';
import styles from './Skills.module.css';

function ReactComponent(props) {
    return (
        <div className={styles.skill}>
            <div>
                <img alt='Skill' className={styles.icon}/>
            </div>
            <span className={styles.skillTitle}>{props.title}</span>
            <span className={styles.description}>Detailed information</span>
        </div>
    );
}

export default ReactComponent;