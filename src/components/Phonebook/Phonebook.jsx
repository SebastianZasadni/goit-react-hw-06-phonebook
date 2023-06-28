import css from './Phonebook.module.css';
import { ContactsForm } from '../ContactsForm/ContactsForm';
import { ContactsList } from '../ContactsList/ContactsList';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { getContacts } from 'redux/selectors';

export const Phonebook = () => {
  const contacts = useSelector(getContacts);

  return (
    <div className={css.sectionPhonebook}>
      <h1>Phonebook</h1>
      <ContactsForm />
      {contacts.length !== 0 && <ContactsList />}
    </div>
  );
};
