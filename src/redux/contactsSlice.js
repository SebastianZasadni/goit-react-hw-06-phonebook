import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState = [
  { id: 321321321, name: 'Marian', number: 213443543 },
  { id: 97607621, name: 'Marek', number: 111222333 },
  { id: 3252946321, name: 'Mariusz', number: 222333444 },
  { id: 327652121, name: 'Michał', number: 333444555 },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },
    deleteContacts(state, action) {
      state.contacts.filter(contact => contact.id !== action.payload);
    },
  },
});

export const {addContact, deleteContact} = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;