import { FaPhone } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import css from './Contact.module.css';
const Contact = ({ id, name, number, onDeleteContact }) => {
    return (
        <div className={css["contact-container"]}>
            <div className={css["contact-info"]}>
                <div>
                    <IoPerson/>
                    <p>{name}</p>
                </div>
                <div>
                    <FaPhone />
                    <p>{number}</p>
                </div>
            </div>
            <button className={css["contact-delete-btn"]} onClick={() => onDeleteContact(id)}>Delete</button>
        </div>
    );
};

export default Contact;