import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerbuilder-9547f.firebaseio.com/'
});

export default instance;