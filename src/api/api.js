import * as axios from 'axios';

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "41b34253-2bd7-4d99-a561-15dc6a8c3c8f" 
    }
});

export const authAPI = {
    async me() {
        return await instance.get('auth/me');
    },
    login(email, password, rememberMe = false) {
        return instance.post('auth/login', {email, password, rememberMe});
    },
    logout() { 
        return instance.delete('auth/login');
    }
}

export const getAuth = () => {
    return instance.get('auth/me');
}

export const getUsersPage = (page, count = 5) => {
    return instance.get(`users?count=${count}&page=${page}`).then(response => {
        return response.data});
}

export const followUser = (id) => {
    return instance.post(`follow/${id}`);
}

export const unfollowUser = (id) => {
    return instance.delete(`follow/${id}`);
}

export const getUserProfile = (id) => {
    return profileAPI.getUserProfile(id);
}

export const profileAPI = {
    getUserProfile(id) {
        return instance.get(`profile/${id}`).then(response => response.data);
    },
    getUserStatus(id) {
        return instance.get(`profile/status/${id}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
    }
}