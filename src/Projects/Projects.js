import React from 'react';
import styles from './Projects.module.css';
import Project from "./Project";
import Title from "../BlockTitles/Title";
import Counter from './../assets/images/Counter.jpg'
import Fade from "react-reveal/Fade";


function Projects() {
    const counterImg = {
        backgroundImage: `url(${Counter})`
    };

    let project = [
        {title: 'To do list', description: 'www', img: counterImg},
        {title: 'Social Network', description: 'www', img: counterImg},
        {title: 'Counter', description: 'www', img: counterImg}];

    let title = 'My projects';
    return (
        <div id={'projects'} className={styles.projects}>
            <Fade right>
                <div className={styles.container}>
                    <Title title={title}/>
                    <div className={styles.wrapper}>
                        {project.map(p => <Project info={p} style={p.img}/>)}
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Projects;
