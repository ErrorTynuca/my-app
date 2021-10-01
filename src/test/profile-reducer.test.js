import profileReducer, {addPostActionCreator} from "../Redux/profile-reducer";
import React from 'react';

let state = {
    PostData: [
        {id: 1, message: 'It`s my first post', value: 8},
        {id: 2, message: 'Hi, how are you?', value: 12},
        {id: 3, message: "I'm fine", value: 3}
    ]
};

test('new post shold be added', () => {

    let action = addPostActionCreator('newPostText-text')

    let newState = profileReducer(state, action)

    expect(newState.PostData.length).toBe(4)
});

