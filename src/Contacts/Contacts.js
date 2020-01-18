import React from 'react';
import styles from './Contacts.module.css';
import Title from "../BlockTitles/Title";
import Fade from "react-reveal/Fade";
import FormMailer from "./FormMailer";

function Contacts() {
    let title = 'Contact';
    return (
        <div id={'contacts'} className={styles.contacts}>
            <Fade bottom>
                <div className={styles.container}>
                    <div className={styles.title}>
                        <Title title={title}/>
                    </div>
                    <FormMailer/>
                </div>
            </Fade>
        </div>
    );
}

export default Contacts;
