"use client"
import axios from "axios";
let url = `${process.env.NEXT_PUBLIC_API_URL}/api/auth`;

const ApiLogin = (data) => {
    return axios.post(`${url}/login`, data)
        .then(res => res.data).catch(res => res.data)
}

export { ApiLogin }
