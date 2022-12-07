const Redux = require('redux');

const fazerLogin = (email) => ({
  type: "LOGIN",
  email,
});

const ESTADO_INICIAL = {
  login: false,
  email: "",
};

const reducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        login: !state.login,
        email: action.email,
      };
    }
};

const store = Redux.createStore(reducer);
store.dispatch(fazerLogin("algum@email.com"));
console.log(store.getState());