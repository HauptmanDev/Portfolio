import React from 'react';
import styles from './Contacts.module.css';

class FormMailer extends React.Component {

    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this)
    }

    state = {status: ''};

    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({status: "SUCCESS"});
            } else {
                this.setState({status: "ERROR"});
            }
        };
        xhr.send(data);
    }

    render() {
        const {status} = this.state;
        return (
            <div className={styles.container}>
                <form className={styles.formWrapper}
                      onSubmit={this.submitForm}
                      action="https://formspree.io/mnqnayrv"
                      method="POST">
                    <input className={styles.inputForm} type="name" name="name" placeholder="Name"/>
                    <input className={styles.inputForm} type="email" name="email" placeholder="Email"/>
                    <textarea className={styles.message} placeholder="Message" rows='5' name='message'/>
                    {status === "SUCCESS" ? <div className={styles.posButton}><span>Thanks!</span></div> :
                        <div className={styles.posButton}>
                            <button className={styles.buttonSend} type="submit">Send message</button>
                        </div>}
                    {status === "ERROR" &&
                    <div className={styles.posButton}><span>Ooops! There was an error.</span></div>}
                </form>
            </div>
        );
    }
}

export default FormMailer;
