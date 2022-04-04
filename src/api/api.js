import * as axios from 'axios';

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "41b34253-2bd7-4d99-a561-15dc6a8c3c8f" 
    }
});

export const getAuth = () => {
    return instance.get('auth/me');
}

export const getUsersPage = (page, count = 5) => {
    return instance.get(`users?count=${count}&page=${page}`).then(response => response.data.items);
}

export const followUser = (id) => {
    return instance.post(`follow/${id}`);
}

export const unfollowUser = (id) => {
    return instance.delete(`follow/${id}`);
}

export const getUserProfile = (id) => {
    return instance.get(`profile/${id}`).then(response => response.data);
}