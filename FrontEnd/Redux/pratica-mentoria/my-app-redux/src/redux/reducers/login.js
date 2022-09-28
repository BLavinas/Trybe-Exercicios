import { ADD_EMAIL } from '../actions'

const INITIAL_STATE = {
  emailUser: '',
  lista: [],
}

const loginReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ADD_EMAIL:
      return {
        ...state,
        emailUser: action.payload,
      }
    default:
      return state
  }
}

export default loginReducer;