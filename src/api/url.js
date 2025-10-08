import axios from "axios"

const BACKEND_URL = axios.create({
    baseURL: "/api/v1/noteapp/"
})

export default BACKEND_URL
