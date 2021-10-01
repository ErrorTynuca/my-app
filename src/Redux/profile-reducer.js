import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    PostData: [
        {id: 1, message: 'It`s my first post', value: 8},
        {id: 2, message: 'Hi, how are you?', value: 12},
        {id: 3, message: "I'm fine", value: 3}
    ],
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case  ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                value: 0
            };
            return {
                ...state,
                PostData: [...state.PostData, newPost]
            };
        }
        case  SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case  SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => {
    return {
        type: ADD_POST,
        newPostText
    }

}


export const setUsersProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status
    }
}

export const getUsersProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId)
    dispatch(setUsersProfile(response.data));
}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }

}

export default profileReducer;