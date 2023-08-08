import React from 'react'
import Comment from './comment'

const Comments = ({comments}) => {
  return (
    <div className='flex justify-center my-4'>
    <div className='flex flex-col'>
        <div className='text-center font-bold sm:text-2xl text-xl my-2'>Comments</div>
        <div className='flex border-black border-2 flex-wrap shrink lg:px-32 md:px-16 px-4 sm:px-1 xs:border-none rounded-lg sm:py-2 py-2'>
            <form className='flex flex-col'>
            <div><label className='mb-2'>Enter your comment</label></div>
            <div><input type='text' placeholder='Enter your comment here' className='mb-4 p-2 rounded-lg' /></div>
            <div><button className="bg-blue-700 text-center rounded-lg font-bold text-white py-2 px-4">Add</button></div>
            </form>

        </div>
        <div className='flex flex-col'>
            {comments.length>0 && comments.map((comment,key)=>{
                return(<Comment comment={comment} />)
            })}
            {comments.length==0 && 
            <div className='text-center my-4'> 
                There are no Comments.

            </div>}


        </div>
        
    </div>
    </div>
  )
}

export default Comments