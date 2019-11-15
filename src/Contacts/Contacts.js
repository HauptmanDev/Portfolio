import React from 'react';
import styles from './Contacts.module.css';
import Title from "../BlockTitles/Title";
import Fade from "react-reveal/Fade";



function Contacts() {
    let title = 'Contacts';
    return (
        <div id={'contacts'} className={styles.contacts}>
            <Fade bottom>
                <div className={styles.container}>
                    <Title title={title}/>
                    <form className={styles.formWrapper}>
                        <input className={styles.inputForm} type='text' placeholder="Name"/>
                        <input className={styles.inputForm} type='email' placeholder="Email"/>
                        <textarea className={styles.message} placeholder="Message"/>
                        <div className={styles.posButton}>
                            <button className={styles.buttonSend} type="submit">Send message</button>
                        </div>
                    </form>
                </div>
            </Fade>
        </div>
    );
}

export default Contacts;
