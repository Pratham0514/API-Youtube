import React from 'react'

function RandomeUserCard1({id,name,email}) {
  return (
   <>
   <div className='flex justify-center'>
 <div className="text-2xl  text-center font-bold text-blue-400 capitalize border p-4 mb-4 rounded-lg shadow-sm w-1/2">RandomeUserCard1
     <p className='text-xl font-bold'>{id}</p>
     <p>{name}</p>
     <p>{email}</p>
     </div>
   </div>
    
   </>
  )
}

export default RandomeUserCard1