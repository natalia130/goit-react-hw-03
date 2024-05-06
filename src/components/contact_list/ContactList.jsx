import css from './ContactList.module.css';
import Contact from './Contact.jsx'
const ContactList = ({ contacts, onDeleteContact }) => {

    return (
        <div>
            <ul className={css["contact-list"]}>
                {contacts.map((contact) => {
                    return (
                        <li className={css["contact-item"]} key={contact.id}>
                            <Contact
                                id={contact.id}
                                name={contact.name}
                                number={contact.number}
                                onDeleteContact={onDeleteContact}
                            />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default ContactList;