import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers:{
        'Content-Type':'application/json'
    }
})

//creating a function that is getting all students API
export const getAllStudents = async() => (await api.get('/students/showstudents')).data