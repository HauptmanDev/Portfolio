import React from 'react';
import styles from './Skills.module.css';
import ReactComponent from "./Skill";
import Title from "../BlockTitles/Title";
import Fade from "react-reveal/Fade";

function Skills() {
    let skills = ['React', 'HTML&CSS', 'JS'];
    let title = 'My skills';
    return (
        <div id={'skills'} className={styles.skills}>
            <Fade bottom>
                <div className={styles.container}>
                    <Title title={title}/>
                    <div className={styles.wrapper}>
                        {skills.map(s => {
                            return <ReactComponent title={s}/>
                        })}
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Skills;
