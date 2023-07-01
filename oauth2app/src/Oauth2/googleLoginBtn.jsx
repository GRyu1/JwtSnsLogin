import axios, { Axios } from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

export default function GoogleLoginBtn() {
    const [googleCode, setGoogleCode] = useState(null)
    const GooglehandleLogin = () => {
        const client_Id = "[yourId]]";
        const redirect_uri = "[yourURI]]";
        const scope = 'https://www.googleapis.com/auth/userinfo.profile';
        const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?scope=https%3A//www.googleapis.com/auth/drive.metadata.readonly&access_type=offline&include_granted_scopes=true&response_type=code&state=state_parameter_passthrough_value&redirect_uri=${redirect_uri}&client_id=${client_Id}`
        sessionStorage.setItem("provider","google")

        window.location.href = authUrl;
    };

    useEffect(() => {
        if (sessionStorage.getItem("provider")==="google") {
        const googleUrlParams = new URLSearchParams(window.location.search);
        console.log("urlprams : " + googleUrlParams);
        const codeValue = googleUrlParams.get('code');
        setGoogleCode(codeValue);
        console.log("googlecode : " + googleCode);

        if(googleCode !== null){
            axios.get('http://localhost:8080/authentication/login/google', {
                params: {
                    code: googleCode
                }
            })
                .then(response => {
                    localStorage.setItem("token", JSON.stringify(response))
                    sessionStorage.removeItem("provider")
            })
        }}
    })

    return (
        <button onClick={GooglehandleLogin}>GoogleLogin</button>
    )
}