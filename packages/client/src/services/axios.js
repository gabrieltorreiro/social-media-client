import axios from 'axios';
import API_URL from '../config';

const request = axios.create({
    baseURL: API_URL
});

console.log(API_URL);

export default request;