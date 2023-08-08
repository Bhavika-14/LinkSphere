import React from 'react'

const Comment = ({comment}) => {
  return (
    <div className='flex flex-col'>
        <div>{comment.user_name}</div>
        <div>{comment.content}</div>
        
    </div>
  )
}

export default Comment