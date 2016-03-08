import axios from 'axios';
import { GET_RESUME } from './constants';

const config = {
    urlHost: process.env.NODE_ENV === 'development' ? 'localhost:3001' : 'cyarie.com',
    rootUrl: process.env.NODE_ENV === 'development' ? `http://${this.urlHost}` : `https://${this.urlHost}`
};

export function getResume() {
    const request = axios.get(`${config.rootUrl}/resume.json`);
    return {
        type: GET_RESUME,
        payload: request
    };
}