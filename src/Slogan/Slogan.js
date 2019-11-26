import React from 'react';
import styles from './Slogan.module.css';
import Title from "../BlockTitles/Title";
import Fade from "react-reveal/Fade";

function Slogan() {
    let title = 'My GitHub';
    return (
        <div className={styles.slogan}>
            <Fade bottom>
                <div className={styles.container}>
                    <Title title={title}/>
                    <div className={styles.posButton}>
                        <a href='https://github.com/HauptmanDev' target="_blank" rel="noopener noreferrer"
                           className={styles.buttonGit}>Let's go to GitHub</a>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Slogan;
