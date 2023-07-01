import React, { useState } from "react";
import axios from "axios";

const UserInfoBtn = ()=>{
    const [user, setUser] = useState(null);
    
    
    const handleUserInfoClicked = () => {
        const config = {
            headers: {
                Authorization: "Bearer "+ localStorage.getItem("token")&&JSON.parse(localStorage.getItem("token")).data.substr(13)
            }
        }
        axios.get("http://localhost:8080/user", config).then((resp)=> {console.log(resp)}).catch((e)=>console.log(e))
    }


return <button onClick={handleUserInfoClicked}>UserInfo</button>
}

export default UserInfoBtn;