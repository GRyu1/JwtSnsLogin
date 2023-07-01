import React, { useState, useEffect } from "react";
import axios from "axios";

export default function NaverLoginBtn() {
    const [naverCode , setNaverCode] = useState(null)
    const NaverhandleLogin = () => {
        const client_Id = "[yourId]]";
        const redirect_uri = "[yourUri]";
        const state = 'gryu';
        const authUrl = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${client_Id}&redirect_uri=${redirect_uri}&state=${state}`;
        sessionStorage.setItem("provider","naver")

        window.location.href = authUrl;
    };

    useEffect(() => {
        if(sessionStorage.getItem("provider") == "naver"){
        console.log(window.location.href)
        const naverUrlParams = new URLSearchParams(window.location.search);
        console.log("naverUrlParams : " + naverUrlParams);
        const naverCodeValue = naverUrlParams.get('code');
        const naverStateValue = naverUrlParams.get('state');
        setNaverCode(naverCodeValue);
        console.log("Naver_code @ NaverLoginComponent : "+naverCode);
        
        if(naverCode !== null){
            axios.get('http://localhost:8080/authentication/login/naver',{
                params: {
                    code: naverCode,
                    state : naverStateValue
                }})
            .then((response) => {
                console.log(response)
                localStorage.setItem("token", JSON.stringify(response))
                sessionStorage.removeItem("provider")
            })
        }
    }
    })
   

    return (
        <button onClick={NaverhandleLogin}>NaverLogin</button>
    )
}