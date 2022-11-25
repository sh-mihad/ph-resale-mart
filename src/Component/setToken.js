  const setToken =(user,userCategory="Buyer")=>{
    const currentUser ={
       name : user.displayName,
       email: user.email,
       photo : user.photoURL,
       userCategory

    }
    const url = `http://localhost:5000/users/${user.email}`
    fetch(url,{
        method:"PUT",
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data.token)
        localStorage.setItem("ph-resale-token",data.token)
    })
}

export default setToken


