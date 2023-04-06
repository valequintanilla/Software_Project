import axios from 'axios';
//This helps set the base url for the whole application
export default axios.create({
    baseURL: 'http://localhost:3500'
});