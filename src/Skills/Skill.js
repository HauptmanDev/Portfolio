import React from 'react';
import styles from './Skills.module.css';

function ReactComponent(props) {
    return (
        <div className={styles.skill}>
            <div className={styles.icon}>
                <img alt='Skill' src={props.skill.image} />
            </div>
            <span className={styles.skillTitle}>{props.skill.title}</span>
        </div>
    );
}

export default ReactComponent;