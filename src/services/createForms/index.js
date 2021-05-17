export const formsExpense = (state, handle) => [
  {
    name: 'input',
    id: 'query-input',
    textField: '',
    type: 'text',
    handle,
    value: state.inputSearch,
  },
];

export const dropDown = () => [
  {
    name: 'currency',
    id: 'header-currency-field',
    textField: '',
    options: ['BRL'],
    value: 'BRL',
    handle: () => false,
  },
];

export const formsLogin = (state, handle) => [
  {
    name: 'email',
    id: 'email-input',
    textField: 'Email:',
    value: state.email,
    handle,
    type: 'text',
  },
  {
    name: 'password',
    id: 'password-input',
    textField: 'Senha:',
    value: state.password,
    handle,
    type: 'password',
  },
];
