import { useEffect, useState } from "react"

const useUserStatus=(email)=>{
    const [userRole,setUserRole] =useState("")
   console.log(email);
   useEffect(()=>{
    if(email){
        fetch(`http://localhost:5000/users?email=${email}`,{
            headers:{
                auhurizaton :`bearar ${localStorage.getItem("ph-resale-token")}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            setUserRole(data)
        })
    }
},[email])

   
  console.log(userRole)
    return [userRole]
}

export default useUserStatus