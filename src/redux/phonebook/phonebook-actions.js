// import types from './phonebook-types'

import { createAction } from '@reduxjs/toolkit'

export const fetchContactRequest = createAction('contacts/fetchContactRequest')
export const fetchContactSuccess = createAction('contacts/fetchContactSuccess')
export const fetchContactError = createAction('contacts/fetchContactError')

export const addContactRequest = createAction('contacts/addContactRequest')
export const addContactSuccess = createAction('contacts/addContactSuccess')
export const addContactError = createAction('contacts/addContactError')

export const deleteContactRequest = createAction('contacts/deleteContactRequest')
export const deleteContactSuccess = createAction('contacts/deleteContactSuccess')
export const deleteContactError = createAction('contacts/deleteContactError')

export const deleteContact = createAction('contacts/delete');
export const changeFilter = createAction('contacts/changeFilter')


// export default { deleteContact, changeFilter }

// const addContacts = createAction('contacts/add', (name, number) => {
//     return {
//         payload: {
//        id: shortid.generate(),
//        name,
//        number,   
//         }
//   }  
// })

// const addContacts = (name, number) => ({
//     type: types.ADD,
//     payload: {
//         id: shortid.generate(),
//         name,
//         number,

//     }
// });
// const deleteContact = contactId => ({
//     type: types.DELETE,
//     payload: contactId,
// });

// const changeFilter = value => ({
//     type: types.changeFilter,
//     payload: value
// })
