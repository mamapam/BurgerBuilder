import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-moe.firebaseio.com/'
});

export default instance;