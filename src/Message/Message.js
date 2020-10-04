import React, {forwardRef} from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'
import classes from './Message.module.css'
const  Message = forwardRef(({username,message,...props}, ref)=>{
    const isUser = username === message.username
    console.log(username)
    return (
        <div ref={ref}>
            <Card className={`${classes.Message} ${isUser && classes.User}`}>
                <CardContent>
                    <Typography 
                        // color=""
                        variant="h5"
                        component="h2"
                    >{
                        isUser?
                        `${message.message}`
                        :`${message.username||"Unknown User"}: ${message.message}`
                    }
                        
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
})

export default Message
