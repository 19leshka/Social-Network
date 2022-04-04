import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';

let store = {
    _state: {
        myProfile: {
            posts: [
                {
                    avatarImg: (window.location.origin + '/img/myProfileImg.jpg'),
                    postText: "I was born",
                    date: "19.02.2003",
                    id: 1
                },
                {
                    avatarImg: (window.location.origin + '/img/myProfileImg.jpg'),
                    postText: "Yesterday I start to watch Euphoria.",
                    date: "20.01.2022",
                    id: 2
                },
                {
                    avatarImg: (window.location.origin + '/img/myProfileImg.jpg'),
                    postText: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae ipsa eius quidem accusamus unde at perspiciatis aliquam voluptates debitis aliquid, exercitationem sapiente modi quasi dolore officia error dignissimos. Dignissimos repudiandae eum magnam non dolorem, ea quidem laborum harum eaque nulla!",
                    date: "23.01.2022",
                    id: 3
                },
                {
                    avatarImg: (window.location.origin + '/img/myProfileImg.jpg'),
                    postText: "No war",
                    date: "24.02.2022",
                    id: 4
                }
            ],
            newPostValue: ""
        },        
        dialogs: [
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
    },
    _callSubscriber() {},

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    
    dispatch(action) {  // {type: ""}
        this._state.myProfile = profileReducer(this._state.myProfile, action);
        this._state.dialogs[1] = dialogsReducer(this._state.dialogs[1], action);
        this._callSubscriber(this._state);
    }
}

export default store;