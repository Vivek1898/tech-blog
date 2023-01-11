import fetch from 'isomorphic-fetch';
import { API } from '../config';
import { handleResponse } from './auth';

export const userPublicProfile = async username => {
    try {
        const response = await fetch(`${API}/user/${username}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json'
            }
        });
        return await response.json();
    } catch (err) {
        return console.log(err);
    }
};

export const getProfile = async token => {
    try {
        const response = await fetch(`${API}/user/profile`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${token}`
            }
        });
        return await response.json();
    } catch (err) {
        return console.log(err);
    }
};

export const update = async (token, user) => {
    try {
        const response = await fetch(`${API}/user/update`, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: user
        });
        handleResponse(response);
        return await response.json();
    } catch (err) {
        return console.log(err);
    }
};
