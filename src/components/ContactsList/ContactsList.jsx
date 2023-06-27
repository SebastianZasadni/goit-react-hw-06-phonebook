import { useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { deleteContact } from 'redux/contactsSlice';
import css from '../Phonebook/Phonebook.module.css';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  
  const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().startsWith(filter && filter.toLowerCase()));

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.sectionContacts}>
      <h3>Contacts</h3>
      <ul className={css.contactsList}>
        {filter
          ? filteredContacts.map(c => (
              <li key={c.id}>
                {c.name}: {c.number}
                <button type="button" onClick={() => handleDelete(c.id)}>
                  Delete
                </button>
              </li>
            ))
          : contacts.map(c => (
              <li key={c.id}>
                {c.name}: {c.number}
                <button type="button" onClick={() => handleDelete(c.id)}>
                  Delete
                </button>
              </li>
            ))}
      </ul>
    </div>
  );
};
