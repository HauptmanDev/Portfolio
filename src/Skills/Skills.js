import React from 'react';
import styles from './Skills.module.css';
import ReactComponent from "./Skill";
import Title from "../BlockTitles/Title";
import Fade from "react-reveal/Fade";
import JS from './../assets/images/NewJSLogo.svg'
import ReactImage from './../assets/images/NewReactLogo.svg'
import HTMLImage from './../assets/images/NeWhtmlLogo.svg'
import CSSImage from './../assets/images/NewCSSLogo.svg'


function Skills() {
    let skills = [
        {title: 'React', image: ReactImage},
        {title: 'JS', image: JS},
        {title: 'HTML', image: HTMLImage},
        {title: 'CSS', image: CSSImage},
    ];
    let title = 'My skills';
    return (
        <div id={'skills'} className={styles.skills}>
            <Fade bottom>
                <div className={styles.container}>
                    <div className={styles.title}>
                        <Title  title={title}/>
                    </div>
                    <div className={styles.wrapper}>
                        {skills.map(s => {
                            return <ReactComponent skill={s}/>
                        })}
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Skills;
