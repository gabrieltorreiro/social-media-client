const axios = require('axios');

const request = axios.create({
    baseURL: 'http://localhost:5000'
});

export async function getPosts(token) {
    try {
        const response = await request.get('/post', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data.map(post => {
            return {
                image: post.image,
                description: post.description,
                userName: post.User.name,
                postId: post.id
            }
        });
    } catch (err) {
        return [];
    }
}

export async function getLikeByPost(auth, postId) {
    try {
        const response = await request(`/post/${postId}/like`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${auth}`
            }
        });
        return response.data.like;
    } catch (err) {
        return false;
    }
}

export async function setLikeStatus(auth, postId) {
    try {
        const response = await request(`/post/${postId}/like`, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${auth}`
            }
        });
        return response.data.like;
    } catch (err) {
        return false;
    }
}

export async function getAllLikes(auth, postId) {
    try {
        const response = await request(`/post/${postId}/likes`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${auth}`
            }
        });
        return response.data.length;
    } catch (err) {
        return false;
    }
}

export async function verifyToken(token) {
    try {
        const response = await request(`/user/verify`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            data: { token }
        });
        return response.data.valid;
    } catch (err) {
        return false;
    }
}

export async function getToken(email, password) {
    try {
        const response = await request(`/user/login`, {
            method: 'POST',
            data: { email, password }
        });
        return response.data.token;
    } catch (err) {
        return false;
    }
}