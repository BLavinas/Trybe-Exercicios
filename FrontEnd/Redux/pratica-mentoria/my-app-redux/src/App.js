import React from 'react';
import { connect } from  'react-redux'
import { addMail } from './redux/actions'
import './App.css';

class App extends React.Component {
 state = {
    email: '',
  }

  handleChange = ({target: { name, value }}) => {
this.setState({
  [name]: value
})
}

handleClick = () => {
  const { email } = this.state
  const { dispatch } = this.props

  dispatch(addMail(email))
}

render() {
  const { payload } = this.props
  return (
    <div>
      <h1>Teste</h1>
      <h2>{payload}</h2>
      <label htmlFor="email">
        <input type="text" name='email' id='email' onChange={this.handleChange} />
      </label>
      <button type='button' onClick={this.handleClick} >Salvar</button>
    </div>
  );

}
}

const mapStateToProps = (state) => ({
  payload: state.login.emailUser,
})
export default connect(mapStateToProps)(App) ;
