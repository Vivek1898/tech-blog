import fetch from 'isomorphic-fetch';
import { API } from '../config';

export const emailContactForm = async data => {
    let emailEndpoint;

    if (data.authorEmail) {
        emailEndpoint = `${API}/contact-blog-author`;
    } else {
        emailEndpoint = `${API}/contact`;
    }

    try {
        const response = await fetch(`${emailEndpoint}`, {
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
