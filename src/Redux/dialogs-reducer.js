const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
    ]
};

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let body = action.newMessageBody;
            return {
                ...state,
                messageData: [...state.messageData, {id: 6, message: body}]
            };
    }
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => {
    return {
        type: SEND_MESSAGE,
        newMessageBody
    }

}


export default dialogReducer;