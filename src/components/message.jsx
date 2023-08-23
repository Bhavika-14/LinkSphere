import React from 'react'

export const Message = ({message,u_id,sender,name,u_name,time}) => {
    if(u_id==sender){
        return(
            
                <div className=' bg-green-900 text-white px-2 py-2 mt-2 w-fit max-w-[85%] break-words float-right  sm:max-w-[60%] rounded-lg'> 
                    {message}
                    <span className='pe-1 ps-3 text-vsm align-bottom text-gray-400 pb-1 break-normal'>{time}</span>
                    
                </div>
            
        )
    }
    else{
        return(
            <div className=''>
                <div className='bg-purple-900 text-white p-2 mb-2  w-fit max-w-[85%] sm:max-w-[60%] rounded-lg '>
                    {message}
                    <span className='pe-1 ps-3 text-vsm align-bottom text-gray-400 pb-1 break-normal'>{time}</span>
                </div>
            </div>
        )
    }
}
