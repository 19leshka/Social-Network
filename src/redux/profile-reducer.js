const ADD_POST = "ADD-POST";
const CHANGE_POST_TEXT = "CHANGE-POST-TEXT";

let initialProfile = {
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
}

const profileReducer = (myProfile = initialProfile, action) => {
    let myProfileCopy = JSON.parse(JSON.stringify(myProfile));
    switch (action.type) {
        case ADD_POST:
            if(myProfileCopy.newPostValue === "") return  myProfile;
            let newPost = {
                avatarImg: (window.location.origin + '/img/myProfileImg.jpg'),
                postText: myProfileCopy.newPostValue,
                date: (new Date()).toLocaleDateString(),
                id: myProfileCopy.posts.length + 1
            }
            myProfileCopy.posts.push(newPost);
            myProfileCopy.newPostValue = "";
            return myProfileCopy;
        case CHANGE_POST_TEXT:
            myProfileCopy.newPostValue = action.newText;
            return myProfileCopy;
        default: 
            return myProfileCopy;
    }
}

export const addPostActionCreater = () => ({
    type: ADD_POST
})

export const updateNewPostTextActionCreater = (text) => ({
    type: CHANGE_POST_TEXT, 
    newText: text
})

export default profileReducer;