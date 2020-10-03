import React, { useEffect, useState } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core'
import Message from './Message/Message'
import './App.css';

function App() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([{
                              username:'Gary',
                              text:'hey Paula'
                            },{
                              username:'Paula',
                              text:'Hello :D'
                            }])
  const [username, setUsername] = useState('')
  useEffect(()=>{
    setUsername(prompt('Please enter your name'))
    return
  },[])
  const sendMessage = () => {
    // all the logic to send a message goes
    setMessages([...messages, {username:username,text:input}])
    setInput('')
    return
  }
  console.log(input)
  console.log(messages)
  return (
    <div className="App">
      <h1>Hello I am creating FB messenger clone</h1>
      <h2>Welcome {username}</h2>
      <form onSubmit={event => event.preventDefault()}>
        <FormControl>
          <InputLabel >Enter a message...</InputLabel>
          <Input type="text" value={input} onChange={event => setInput(event.target.value)} />
          <Button
            type='submit'
            onClick={sendMessage}
            variant='contained'
            color='primary'
            disabled={!input}
          >Send Message</Button>
        </FormControl>
      </form>
      {
        messages.map((message, index) => (
          <Message key={index} username={message.username} text={message.text}/>
          // <p key={index}>{message}</p>
        ))
      }
    </div>

  )
}

export default App;
