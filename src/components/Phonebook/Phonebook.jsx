import css from './Phonebook.module.css';
import { ContactsForm } from '../ContactsForm/ContactsForm';
import { ContactsList } from '../ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
export const Phonebook = () => {
  return (
    <div className={css.sectionPhonebook}>
      <h1>Phonebook</h1>
      <ContactsForm />
      <ContactsList />
      <Filter />
    </div>
  );
};
