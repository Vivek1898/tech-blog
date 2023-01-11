import fetch from 'isomorphic-fetch';
import { API } from '../config';
import { handleResponse } from './auth';

export const create = async (tag, token) => {
    try {
        const response = await fetch(`${API}/tag`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(tag)
        });
        handleResponse(response);
        return await response.json();
    } catch (err) {
        return console.log(err);
    }
};

export const getTags = async () => {
    try {
        const response = await fetch(`${API}/tags`, {
            method: 'GET'
        });
        return await response.json();
    } catch (err) {
        return console.log(err);
    }
};

export const singleTag = async slug => {
    try {
        const response = await fetch(`${API}/tag/${slug}`, {
            method: 'GET'
        });
        return await response.json();
    } catch (err) {
        return console.log(err);
    }
};

export const removeTag = async (slug, token) => {
    try {
        const response = await fetch(`${API}/tag/${slug}`, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        });
        handleResponse(response);
        return await response.json();
    } catch (err) {
        return console.log(err);
    }
};
