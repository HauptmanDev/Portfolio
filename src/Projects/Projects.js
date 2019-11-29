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
        {title: 'To do list', description: 'Under development', img: counterImg, href: 'https://hauptmandev.github.io/Counter'},
        {title: 'Social Network', description: 'Under development', img: counterImg, href: 'https://hauptmandev.github.io/Social-Network'},
        {title: 'Counter', description: 'My first small application', img: counterImg, href: 'https://hauptmandev.github.io/Counter'}];

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
