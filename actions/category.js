import fetch from 'isomorphic-fetch';
import { API } from '../config';
import { handleResponse } from './auth';

export const create = async (category, token) => {
    try {
        const response = await fetch(`${API}/category`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(category)
        });
        handleResponse(response);
        return await response.json();
    } catch (err) {
        return console.log(err);
    }
};

export const getCategories = async () => {
    try {
        const response = await fetch(`${API}/categories`, {
            method: 'GET'
        });
        return await response.json();
    } catch (err) {
        return console.log(err);
    }
};

export const singleCategory = async slug => {
    try {
        const response = await fetch(`${API}/category/${slug}`, {
            method: 'GET'
        });
        return await response.json();
    } catch (err) {
        return console.log(err);
    }
};

export const removeCategory = async (slug, token) => {
    try {
        const response = await fetch(`${API}/category/${slug}`, {
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
