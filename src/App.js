import {React, useState} from 'react'
const Password = () => {
  const [inputPassword, setInputPassword]= useState("")
  const onInput= (event) =>{
    setInputPassword(event.target.value)
  }

  return (
    <div className="container">
      <div className="password">
        <p className="password-title">PASSWORD:</p>
        <input onChange={onInput} 
          onBlur={({target}) =>setTimeout(() =>{target.focus()}, 0)}
          autoFocus></input>
        <div className="secret-password">
          <p>{"Ā".repeat(3 * inputPassword.length)}
          </p>

        </div>
      </div>
      {inputPassword==="1234theninesistersclassreal" ? <div className="login"><p>Login</p>
        <p>Sorry. You&nbsp;&nbsp;have&nbsp;&nbsp;...&emsp;NO&nbsp;&nbsp;MAIL.</p></div>: <></>}
    </div>
  )
}
const App = () => {

return(
  <div>
      <Password></Password>
  </div>
  )
}
export default App
