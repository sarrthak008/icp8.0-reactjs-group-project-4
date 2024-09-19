import React from 'react'
import "./Chatprofile.css"

const Chatprofile = ({user}) => {
  return (
     <div className='chat-container'>
          <div className='user-pic usercard-image'>
             <img src={user.url}></img>
          </div>
          <div className='user-chat-info'>
             <span className='chat-name'>{`${user.first_name} ${user.last_name} .`}</span>
             <span className='user-work-info'>{`hey i am passinate ${user.role} .`}</span>
          </div>
     </div>
  )
}

export default Chatprofile
