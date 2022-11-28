  const setToken =(user)=>{
  
    const url = `http://localhost:5000/users/${user.email}`
    fetch(url,{
        method:"PUT",
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data.token)
        localStorage.setItem("ph-resale-token",data.token)
    })
}

export default setToken


