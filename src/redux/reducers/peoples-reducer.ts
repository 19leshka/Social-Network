import {PeoplesActions, PeoplesActionTypes, PeoplesState} from "../types/peoples";

let peoples: PeoplesState = [
    {
        id: 1,
        name: "Максим Вырко",
        img: 'https://sun1.velcom-by-minsk.userapi.com/s/v1/ig2/cpkslMxOF8srX9ZqQFccFroHoAISOhUbOZ3dYFFR4lvtDk-kjYIbpCdiBK8mGPdX1kykO53p7JxBxfPKcECzRUr_.jpg?size=50x50&quality=95&crop=0,0,736,736&ava=1',
        messages: [],
        newMessageText: ""
    }, 
    {
        id: 2,
        name: "Никита Пуцик",
        img: 'https://sun1.velcom-by-minsk.userapi.com/s/v1/if2/RPeHanYwhOP5mLa0Axtih84mbmpMQ0AbdL2VMSmAGkhnSivHO1yn8WJPhORaJT4BtIGZ_8WErcl9bYh_IJOp6qth.jpg?size=50x50&quality=96&crop=407,442,808,808&ava=1',
        messages: [
            {   
                author: 0,
                text: "Нужно нам сходить в бар за Виталюром",
                id: 1
            },
            {
                author: 0,
                text: "Бокал",
                id: 2
            },
            {
                author: 1,
                text: "Я там был с иваном",
                id: 3
            },
            {
                author: 1,
                text: "После понедельника у меня есть лот на вечер",
                id: 4
            },
            {
                author: 1,
                text: "Так усе",
                id: 5
            },
            {
                author: 0,
                text: "Чё?",
                id: 6
            },
            {
                author: 1,
                text: "Ну завтра вечером брик",
                id: 7
            },
            {
                author: 1,
                text: "Юрик",
                id: 8
            },
            {
                author: 1,
                text: "Во вторник гоу",
                id: 9
            },
            {
                author: 0,
                text: "Ок",
                id: 10
            }
        ],
        newMessageText: ""
    },
    {
        id: 3,
        name: "Умар Бхат",
        img: 'https://sun1.velcom-by-minsk.userapi.com/s/v1/ig2/IgJ9CD-Pf7rv7mA2pxh0_F-3NzkKxmMJqF1SNMDLL7JYsGLbBSmb2REI12m1CXrAH5oUh4RKKe3VC1ECqn5-dEvC.jpg?size=50x50&quality=96&crop=336,672,622,622&ava=1',
        messages: [],
        newMessageText: ""
    }, 
    {
        id: 4,
        name: "Максим Малинец",
        img: 'https://sun1.velcom-by-minsk.userapi.com/s/v1/ig2/Yd0J4WCbJtG0XqA5YynILMC2Lvc3IlJymnfI5PHjNexvk_C47VejzNr5LxHn1KM-bOOWgud-5SptpaJB8--BeEbQ.jpg?size=50x50&quality=96&crop=35,73,274,274&ava=1',
        messages: [],
        newMessageText: ""
    }
]

const dialogsReducer = (dialog = peoples, action: PeoplesActions): PeoplesState => {
    let dialogCopy = JSON.parse(JSON.stringify(dialog));
    switch(action.type) {
        case PeoplesActionTypes.SEND_MESSAGE:
            if(dialogCopy[1].newMessageText === "") return dialog;

            let newMessage = {
                author: 0,
                text: dialogCopy[1].newMessageText
            }
    
            dialogCopy[1].messages.push(newMessage);
            dialogCopy[1].newMessageText = "";   
            return dialogCopy;
        case PeoplesActionTypes.CHANGE_MESSAGE_TEXT:
            dialogCopy[1].newMessageText = action.payload;
            return dialogCopy;
        default:
            return dialogCopy;
    }

}

export const sendMessageActionCreator = () => ({
    type: PeoplesActionTypes.SEND_MESSAGE
})

export const updateNewMessageTextActionCreator = (text) => ({
    type: PeoplesActionTypes.CHANGE_MESSAGE_TEXT,
    payload: text
})

export default dialogsReducer;