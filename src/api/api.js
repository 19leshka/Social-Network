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
    login(email, password, rememberMe = false, captcha) {
        return instance.post('auth/login', {email, password, rememberMe, captcha});
    },
    logout() { 
        return instance.delete('auth/login');
    }
}

export const getAuth = () => {
    return instance.get('auth/me');
}

export const getUsers = (page, count = 5) => {
    return instance.get(`users?count=${count}&page=${page}`).then(response => response.data);
}

export const getFriends = (page, count = 5) => {
    return instance.get(`users?count=${count}&page=${page}&friend=true`).then(response => response.data);
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
        return instance.get(`profile/status/${id}`);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status});
    },
    setPhoto(photo) {
        const formData = new FormData();
        formData.append("image", photo);
        return instance.put(`profile/photo`, formData, { 
            headers: {
            'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveFullInfo(info) {
        return instance.put(`profile`, info);
    }
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`);
    }
}

export const newsAPI = {
    getPosts() {
        return axios.get(`https://jsonplaceholder.typicode.com/posts`);
    }
}