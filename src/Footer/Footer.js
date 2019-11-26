import React from 'react';
import styles from './Footer.module.css';
import Title from "../BlockTitles/Title";
import telegram from './../assets/images/telegram.svg'
import vk from './../assets/images/vk-social-logotype.svg'
import linkedin from './../assets/images/linkedin-letters.svg'
import Fade from "react-reveal/Fade";


function Footer() {
    let title = 'My profiles';
    return (
        <div className={styles.footer}>
            <Fade bottom>
                <div className={styles.container}>
                    <Title title={title}/>
                    <div className={styles.social}>
                        <div className={styles.icon}>
                            <a href='https://t.me/HauptDev' target='_blank' rel="noopener noreferrer">
                                <img src={telegram} alt=''/>
                            </a>
                        </div>
                        <div className={styles.icon}>
                            <a href='https://vk.com/id_brosco' target='_blank' rel="noopener noreferrer">
                                <img src={vk} alt=''/>
                            </a>
                        </div>
                        <div className={styles.icon}>
                            <a href='https://www.linkedin.com/in/vadim-haupt-613b56196' target='_blank'
                               rel="noopener noreferrer">
                                <img src={linkedin} alt=''/>
                            </a>
                        </div>
                    </div>
                    <span className={styles.copyright}>2019 © Все права защищены.</span>
                </div>
            </Fade>
        </div>
    );
}

export default Footer;
