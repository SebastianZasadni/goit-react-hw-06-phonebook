import { createSlice } from '@reduxjs/toolkit';

const localContacts = JSON.parse(localStorage.getItem('contacts'));

const contactsInitialState = localContacts;

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState ?? [],
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
