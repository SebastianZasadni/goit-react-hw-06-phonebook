import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getContacts, getFilter } from 'redux/selectors';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { deleteContact } from 'redux/contactsSlice';
import { Filter } from 'components/Filter/Filter';
import css from '../Phonebook/Phonebook.module.css';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const filteredContacts =
    contacts &&
    contacts.filter(contact =>
      contact.name.toLowerCase().startsWith(filter && filter.toLowerCase())
    );

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };
console.log(contacts)
  return (
    <div className={css.sectionContacts}>
      <h3>Contacts</h3>
      <ul className={css.contactsList}>
        {filter ? (
          filteredContacts.map(c => (
            <li key={c.id}>
              {c.name}: {c.number}
              <button type="button" onClick={() => handleDelete(c.id)}>
                Delete
              </button>
            </li>
          ))
        ) : contacts ? (
          contacts.map(c => (
            <li key={c.id}>
              {c.name}: {c.number}
              <button type="button" onClick={() => handleDelete(c.id)}>
                Delete
              </button>
            </li>
          ))
        ) : (
          <li>You have no contacts.</li>
        )}
      </ul>
      {localStorage.length !== 1 && <Filter />}
    </div>
  );
};
