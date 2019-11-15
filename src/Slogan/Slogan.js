import React from 'react';
import styles from './Slogan.module.css';
import Title from "../BlockTitles/Title";
import Fade from "react-reveal/Fade";

function Slogan() {
    let title = 'Slogan';
    return (
        <div className={styles.slogan}>
            <Fade bottom>
                <div className={styles.container}>
                    <Title title={title}/>
                    <a className={styles.buttonGit}>May be Git</a>
                </div>
            </Fade>
        </div>
    );
}

export default Slogan;
