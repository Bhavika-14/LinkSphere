import React from 'react'

const Comment = ({comment}) => {
  return (
    <div className='flex flex-col rounded-lg bg-gray-900 mb-2 px-2 py-2 justify-center text-white'>
        <div className='font-bold'>{comment.user_name}</div>
        <div className='ps-4 break-words pe-1'>{comment.content}</div>
        
    </div>
  )
}

export default Comment