import axios from 'axios'

const url = "http://localhost:5000/api/books"

export const fetchBooks = () => axios.get(url)