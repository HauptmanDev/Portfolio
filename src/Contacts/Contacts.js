import React from 'react';
import styles from './Contacts.module.css';
import Title from "../BlockTitles/Title";
import Fade from "react-reveal/Fade";
import FormMailer from "./FormMailer";

function Contacts() {
    let title = 'Contacts';
    return (
        <div id={'contacts'} className={styles.contacts}>
            <Fade bottom>
                <div className={styles.container}>
                    <Title title={title}/>
                    <FormMailer/>
                </div>
            </Fade>
        </div>
    );
}

export default Contacts;
