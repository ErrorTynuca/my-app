import dialogReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

 let store = {
    _state: {
        profilePage: {
            PostData: [
                {id: 1, message: 'It`s my first post', value: 8},
                {id: 2, message: 'Hi, how are you?', value: 12},
                {id: 3, message: "I'm fine", value: 3}
            ],
            newPostText: 'Wymance'
        },

        dialogsPage: {
            dialogsData: [
                {id: 1, name: 'Ivan'},
                {id: 2, name: 'Artiom'},
                {id: 3, name: 'Petia'},
                {id: 4, name: 'Dasha'},
                {id: 5, name: 'Andrey'},
                {id: 6, name: 'Ira'}
            ],
            messageData: [
                {id: 1, message: 'Hellow'},
                {id: 2, message: 'You watch films?'},
                {id: 3, message: 'Go to the park'}
            ],
            newMessageBody: 'trt'
        }
    },
    _callSubscribe() {

    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscribe = observer;
    },

    dispatch(action) {
        profileReducer(this._state.profilePage, action);
        dialogReducer(this._state.dialogsPage, action);
        this._callSubscribe(this._state);
    }
}




export default store

window.store = store;


