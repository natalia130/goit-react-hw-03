import { useState, useEffect } from 'react'
import './App.css'
import ContactForm from '../contact_form/ContactForm.jsx'
import SearchBox from '../search_box/SearchBox.jsx'
import ContactList from '../contact_list/ContactList.jsx'


const App = () => {

  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem("saved-contacts");
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
    return [];
  });

  useEffect(() => {
    window.localStorage.setItem("saved-contacts", JSON.stringify(contacts));
  }, [contacts]);

  const [searchValue, setSearchValue] = useState("");
  const handleChangeSearch = (event) => {
    setSearchValue(event.target.value);
  }

  const filteredContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(searchValue.toLowerCase());
  });

  const handleAddContact = (contact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, contact]
    });
  }

  const handleDeleteContact = (id) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((state) => state.id !== id)
    });
    // const nextContacts = [...contacts];
    // const index = nextContacts.findIndex((contact) => contact.id === id);
    // nextContacts.splice(index, 1);
    // setContacts(nextContacts);
  }

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox searchValue={searchValue}  handleChangeSearch={handleChangeSearch} />
      <ContactList contacts={filteredContacts} onDeleteContact={handleDeleteContact} />
    </>
  )
}

export default App
