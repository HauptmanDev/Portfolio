import React from 'react';
import styles from './Projects.module.css';
import Project from "./Project";
import Title from "../BlockTitles/Title";
import Counter from './../assets/images/counter.jpg'
import SocialNetwork from './../assets/images/network.jpg'
import TodoList from './../assets/images/todolist.jpg'
import Fade from "react-reveal/Fade";


function Projects() {
    const todoList = {
        backgroundImage: `url(${TodoList})`,
    };
    const network = {
        backgroundImage: `url(${SocialNetwork})`,
    };
    const counter = {
        backgroundImage: `url(${Counter})`,
    };

    let project = [
        {
            title: 'Social Network',
            description: 'Intermediate stage of development',
            image: network,
            href: 'https://hauptmandev.github.io/Social-Network/'
        },
        {
            title: 'Counter',
            description: 'My first small application',
            image: counter,
            href: 'https://hauptmandev.github.io/Counter'
        }];

    let title = 'My first projects';
    return (
        <div id={'projects'} className={styles.projects}>
            <Fade right>
                <div className={styles.container}>
                    <div className={styles.title}>
                        <Title title={title}/>
                    </div>
                    <div className={styles.wrapper}>
                        {project.map(p => <Project info={p}/>)}
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Projects;
