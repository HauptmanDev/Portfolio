import React from 'react';
import styles from './Main.module.css';
import Fade from "react-reveal/Fade";

function Main() {
    return (
        <div id={'main'} className={styles.main}>
            <Fade bottom>
                <div className={styles.container}>
                    <div className={styles.greeting}>
                        <span>Hello!</span>
                        <span>I'm <span>Vadim Haupt</span></span>
                        <h1>Front-end developer</h1>
                    </div>
                    <div className={styles.photo}>
                        <img src='' alt=''/>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Main;
