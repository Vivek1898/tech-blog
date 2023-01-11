import fetch from 'isomorphic-fetch';
import { API } from '../config';
import queryString from 'query-string';
import { isAuth, handleResponse } from './auth';

export const createBlog = async (blog, token) => {
    let createBlogEndpoint;

    if (isAuth() && isAuth().role === 1) {
        createBlogEndpoint = `${API}/blog`;
    } else if (isAuth() && isAuth().role === 0) {
        createBlogEndpoint = `${API}/user/blog`;
    }

    try {
        const response = await fetch(`${createBlogEndpoint}`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: blog
        });
        handleResponse(response);
        return await response.json();
    } catch (err) {
        return console.log(err);
    }
};

export const listBlogsWithCategoriesAndTags = async (skip, limit) => {
    const data = {
        limit,
        skip
    };
    try {
        const response = await fetch(`${API}/blogs-categories-tags`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return await response.json();
    } catch (err) {
        return console.log(err);
    }
};

export const singleBlog = async (slug = undefined) => {
    try {
        const response = await fetch(`${API}/blog/${slug}`, {
            method: 'GET'
        });
        return await response.json();
    } catch (err) {
        return console.log(err);
    }
};

export const listRelated = async blog => {
    try {
        const response = await fetch(`${API}/blogs/related`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(blog)
        });
        return await response.json();
    } catch (err) {
        return console.log(err);
    }
};

export const list = async username => {
    let listBlogsEndpoint;

    if (username) {
        listBlogsEndpoint = `${API}/${username}/blogs`;
    } else {
        listBlogsEndpoint = `${API}/blogs`;
    }

    try {
        const response = await fetch(`${listBlogsEndpoint}`, {
            method: 'GET'
        });
        return await response.json();
    } catch (err) {
        return console.log(err);
    }
};

export const removeBlog = async (slug, token) => {
    let deleteBlogEndpoint;

    if (isAuth() && isAuth().role === 1) {
        deleteBlogEndpoint = `${API}/blog/${slug}`;
    } else if (isAuth() && isAuth().role === 0) {
        deleteBlogEndpoint = `${API}/user/blog/${slug}`;
    }

    try {
        const response = await fetch(`${deleteBlogEndpoint}`, {
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

export const updateBlog = async (blog, token, slug) => {
    let updateBlogEndpoint;

    if (isAuth() && isAuth().role === 1) {
        updateBlogEndpoint = `${API}/blog/${slug}`;
    } else if (isAuth() && isAuth().role === 0) {
        updateBlogEndpoint = `${API}/user/blog/${slug}`;
    }

    try {
        const response = await fetch(`${updateBlogEndpoint}`, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: blog
        });
        handleResponse(response);
        return await response.json();
    } catch (err) {
        return console.log(err);
    }
};

export const listSearch = async params => {
    console.log('search params', params);
    let query = queryString.stringify(params);
    console.log('query params', query);
    try {
        const response = await fetch(`${API}/blogs/search?${query}`, {
            method: 'GET'
        });
        return await response.json();
    } catch (err) {
        return console.log(err);
    }
};
