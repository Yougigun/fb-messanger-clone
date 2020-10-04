import React, { useEffect, useState } from 'react';
import { Button, FormControl, InputLabel, Input, IconButton } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send';
import FlipMove from 'react-flip-move';
import firebase from 'firebase'
import db from './firebase/firebase'
import Message from './Message/Message'
import classes from './App.module.css';
import messengerLogo from './asset/Messenger_Logo_Color_RGB.png'

function App() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])
  const [username, setUsername] = useState('')
  // useState = variable in REACT
  // useEffect = run code on a condition in REACT

  useEffect(() => {
    // run once the app component loaded
    // Set up a listener listening for any changes 
    // at which point it shoots off a snapshot like a 
    // real-time capture of the database
    console.log("Start listening to snapshot of db");
    let unsubscribe = db.collection('messages')
      .orderBy('timestamp', "desc")
      .onSnapshot({
        // Listen for document metadata changes
        includeMetadataChanges: true
      }, snapshot => {
        console.log("new docs...",);
        setMessages(snapshot.docs.map(doc => ({ message: doc.data(), id: doc.id })))
      })
    return () => {
      unsubscribe()
    }
  }, [])

  useEffect(() => {
    setUsername(prompt('Please enter your name'))
    return
  }, [])
  const sendMessage = () => {
    // all the logic to send a message goes
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    // setMessages([...messages, {username:username,message:input}])
    setInput('')
    return
  }
  return (
    <div className={classes.App}>
      <img src={messengerLogo} alt="" width="100" height="100" />
      <h1>Hello, Here is FB Messenger Clone made by Gary</h1>
      <h2>Welcome {username}</h2>
      <form className={classes.Form} onSubmit={event => event.preventDefault()}>
        <FormControl className={classes.FormControl}>
          {/* <InputLabel >Enter a message...</InputLabel> */}
          <Input className={classes.Input} placeholder="Enter a message..." type="text" value={input} onChange={event => setInput(event.target.value)} />
          <IconButton
            className={classes.IconButton}
            type='submit'
            onClick={sendMessage}
            variant='contained'
            color='primary'
            disabled={!input}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
      <FlipMove>
        {
          messages.map(({ id, message }) => (
            <Message key={id} username={username} message={message} />
            // <p key={index}>{message}</p>
          ))
        }
      </FlipMove>
    </div>

  )
}

export default App;
