import axios from 'axios';
export default axios.create({
    baseURL: 'http://ec2-3-16-151-99.us-east-2.compute.amazonaws.com:8080/',
    //headers: {"ngrok-skip-browser-warning": "true"}
});