import { useState,useEffect } from "react"
import { getRandomeUser } from "./Api/RandomeUser1"
import RandomeUserCard1 from "./Component/RandomeUserCard1"
function RandomeUser1() {
    const [data, setData] = useState(null);
   const random= ()=>{
    setData(null);
    getRandomeUser().then((user) => setData(user.results[0]));
   }
   useEffect(() =>{
        random();
    },[]);
    console.log(data);
  return (
   <div>
     <div>RandomeUser1</div>
     {
        data ? (<RandomeUserCard1 key={data.id} name={data.name.first} email={data.email} />) :<p className="text-blue-400 font-bol">"loading" </p>
     }  
     
     <button onClick={() => random()} className="border-2  p-2 bg-orange-400">Random User</button>
   </div>
  )
}

export default RandomeUser1