const SEND_MESSAGE = "SEND-MESSAGE";
const CHANGE_MESSAGE_TEXT = "CHANGE-MESSAGE-TEXT";

let peoples = [
    {
        id: 1,
        name: "Максим Вырко",
        img: "/img/MaxVyrkoProfileImg.jpg",
        messages: [],
        newMessageText: ""
    }, 
    {
        id: 2,
        name: "Никита Пуцик",
        img: "/img/NikitaPutsikProfileImg.jpg",
        messages: [
            {
                author: 0,
                text: "Нужно нам сходить в бар за Виталюром"
            },
            {
                author: 0,
                text: "Бокал"
            },
            {
                author: 1,
                text: "Я там был с иваном"
            },
            {
                author: 1,
                text: "После понедельника у меня есть лот на вечер"
            },
            {
                author: 1,
                text: "Так усе"
            },
            {
                author: 0,
                text: "Чё?"
            },
            {
                author: 1,
                text: "Ну завтра вечером брик"
            },
            {
                author: 1,
                text: "Юрик"
            },
            {
                author: 1,
                text: "Во вторник гоу"
            },
            {
                author: 0,
                text: "Ок"
            }
        ],
        newMessageText: ""
    }, 
    {
        id: 3,
        name: "Иван Лузинов",
        img: "/img/IvanLuzinovProfileImg.jpg",
        messages: [],
        newMessageText: ""
    }, 
    {
        id: 4,
        name: "Умар Бхат",
        img: "/img/UmarBhatProfileImg.jpg",
        messages: [],
        newMessageText: ""
    }, 
    {
        id: 5,
        name: "Максим Малинец",
        img: "/img/MaxMalinetsProfileImg.jpg",
        messages: [],
        newMessageText: ""
    }, 
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

export const sendMessageActionCreater = () => ({
    type: SEND_MESSAGE
})

export const updateNewMessageTextActionCreater = (text) => ({
    type: CHANGE_MESSAGE_TEXT, 
    newText: text
})

export default dialogsReducer;