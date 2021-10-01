import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "e3c4ced6-9885-47d3-91e4-95080c364fd2"
    }

})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 15) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },

    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },

    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    getProfile(userId) {
        console.warn('Obsolete method. Please');
        return profileAPI.getProfile(userId);
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
    },

    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
    },

    updateStatus(status) {
        return instance.put(`profile/status`, { status: status })
    }
}


export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email, password,rememberMe = false) {
        return instance.post(`auth/login`, { email, password,rememberMe })
    },
    logout() {
        return instance.delete(`auth/login`)
    },

}




