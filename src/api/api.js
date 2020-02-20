import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: { 'API-KEY': '20dcf41f-4ce2-4a58-8dd0-73d7bf071b3c' }
})

export const API = {
    getUsers(currentPage = 1, pageSize = 4, term){
        return instance.get(`users?page=${currentPage}&count=${pageSize}&term=${term}`)
            .then(response => response.data)
    },

    getProfile(userId){
        return profileAPI.getProfile(userId)
    },

    postFollow(authId){
        return instance.post(`follow/${authId}`, {})
            .then(response => response.data)
    },

    deleteUnfollow(authId){
        return instance.delete(`follow/${authId}`, {})
            .then(response => response.data)
    }
}

export const profileAPI = {
    getProfile(userId){
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },

    getStatus(userId){
        return instance.get(`profile/status/${userId}`)
            .then(response => response.data)
    },

    updateStatus(status){
        return instance.put('profile/status/', { status: status })
            .then(response => response.data)
    },

    savePhoto(photo){
        const formData = new FormData();
        formData.append('image', photo)
        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => response.data)
    },

    saveDetails(profile){
        return instance.put('profile', profile)
            .then(response => response.data);
    }
}

export const authAPI = {
    getAuth(){
        return instance.get('auth/me')
            .then(response => response.data)
    },

    login(email, password, rememberMe, captcha){
        return instance.post('auth/login', {email, password, rememberMe, captcha    })
            .then(response => response.data)
    },

    logout(){
        return instance.delete('auth/login')
            .then(response => response.data)
    },

    getCaptcha(){
        return instance.get('security/get-captcha-url')
            .then(response => response.data)
    }
}