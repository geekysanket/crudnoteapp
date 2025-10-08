import axios from "axios"

const BACKEND_URL = axios.create({
    baseURL: "crudnoteapp-backend.vercel.app/api/v1/noteapp/"
})

export default BACKEND_URL
