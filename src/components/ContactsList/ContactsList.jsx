import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { deleteContact } from 'redux/contactsSlice';
import css from '../Phonebook/Phonebook.module.css';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  return (
    <div className={css.sectionContacts}>
      <h3>Contacts</h3>
      <ul className={css.contactsList}>
        {contacts.map(c => (
          <li key={c.id}>
            {c.name}: {c.number}
            <button type="submit" onClick={() => dispatch(deleteContact(c.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
};
