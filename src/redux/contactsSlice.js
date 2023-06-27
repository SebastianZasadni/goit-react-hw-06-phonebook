import { createSlice } from '@reduxjs/toolkit';

const localContacts = JSON.parse(localStorage.getItem('contacts'));

const contactsInitialState = localContacts && localContacts;

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState ? contactsInitialState : [],
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },
    deleteContact(state, action) {
      const index = state.findIndex(
        contact => contact.id === action.payload
      );
      state.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;