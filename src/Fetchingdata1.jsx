import { getposts } from './Api/Fetchingdata1'
import { useState, useEffect } from 'react'
import FetchingdataCard1 from './Component/FetchingdataCard1'
function Fetchingdata1() {
  const [data, setData] = useState([]);
  useEffect(() =>{
    getposts().then(post => setData(post)); 
  },[])
  return (
    <div>
      <h1 className='text-3xl font-bold text-red-400 '>Fetchingdata1</h1>
      {
        data ? data.map((e) => <FetchingdataCard1 
            key={e.id}
            title={e.title}
            body={e.body}
        />) : "loading"
      }


   
    </div>
  )
}

export default Fetchingdata1