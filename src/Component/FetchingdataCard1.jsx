import React from 'react'

function FetchingdataCard1({ id, title, body }) {
  return (
    <div className="border p-4 mb-4 rounded-lg shadow-sm"> 
      
      <div className="text-2xl font-bold text-blue-400 capitalize">
        {title}
      </div>
      <div className="text-gray-600 mt-2">
        {body}
      </div>
    </div>
  )
}

export default FetchingdataCard1