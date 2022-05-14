import maxVirko from './../assets/friends/MaxVyrkoProfileImg.jpg';
import nikPutsik from './../assets/friends/NikitaPutsikProfileImg.jpg';
import ivanLuzinov from './../assets/friends/IvanLuzinovProfileImg.jpg';
import umarBhat from './../assets/friends/UmarBhatProfileImg.jpg';
import maxMalinets from './../assets/friends/MaxMalinetsProfileImg.jpg';

const SEND_MESSAGE = "SEND-MESSAGE";
const CHANGE_MESSAGE_TEXT = "CHANGE-MESSAGE-TEXT";

let peoples = [
    {
        id: 1,
        name: "Максим Вырко",
        img: maxVirko,
        messages: [],
        newMessageText: ""
    }, 
    {
        id: 2,
        name: "Никита Пуцик",
        img: nikPutsik,
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
        name: "Иван Лузинов",
        img: ivanLuzinov,
        messages: [],
        newMessageText: ""
    }, 
    {
        id: 4,
        name: "Умар Бхат",
        img: umarBhat,
        messages: [],
        newMessageText: ""
    }, 
    {
        id: 5,
        name: "Максим Малинец",
        img: maxMalinets,
        messages: [],
        newMessageText: ""
    }
]

const dialogsReducer = (dialog = peoples, action) => {
    let dialogCopy = JSON.parse(JSON.stringify(dialog));
    switch(action.type) {
        case SEND_MESSAGE:
            if(dialogCopy[1].newMessageText === "") return dialog;

            let newMessage = {
                author: 0,
                text: dialogCopy[1].newMessageText
            }
    
            dialogCopy[1].messages.push(newMessage);
            dialogCopy[1].newMessageText = "";   
            return dialogCopy;
        case CHANGE_MESSAGE_TEXT:
            dialogCopy[1].newMessageText = action.newText;
            return dialogCopy;
        default:
            return dialogCopy;
    }

}

export const sendMessageActionCreator = () => ({
    type: SEND_MESSAGE
})

export const updateNewMessageTextActionCreator = (text) => ({
    type: CHANGE_MESSAGE_TEXT, 
    newText: text
})

export default dialogsReducer;