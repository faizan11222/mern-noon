import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers:{
        'Content-Type':'application/json'
    }
})

//creating a function that is getting all students API
export const getAllStudents = async() => (await api.get('/api/students/showstudents')).data

//creating a function that is getting all students API
export const getStudentById = async(id) => (await api.get(`/api/students/student/${id}`)).data

//creating a function to add students API
export const addStudent = async(data) => (await api.post('/api/students/addstudent', data)).data

//creating a function to update students API
export const updateStudent = async(id,data) => (await api.post(`/api/students/updatestudent/${id}`, data)).data

//creating a function to delete students API
export const deleteStudent = async(id) => (await api.delete(`/api/students/deletestudent/${id}`)).data