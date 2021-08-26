import React from 'react'

const LoginForm = (props) => (
  <div>
    <h2>Kirjaudu sisään alla olevalla lomakkeella</h2>

    <form onSubmit={props.handleLogin}>
      <div>Käyttäjätunnus</div>
      <input type="text" value={props.username} name="Username"
        onChange={({ target }) => props.setUsername(target.value)}
      />
      <div>Salasana</div>
      <input type="password" value={props.password} name="Password"
        onChange={({ target }) => props.setPassword(target.value)}
      />
      <button type="submit" id='kirjaudu'>Kirjaudu</button>
    </form>

  </div>

)

export default LoginForm