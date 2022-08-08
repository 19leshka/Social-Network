import profileReducer, {deletePostActionCreater} from './profile-reducer';

it('length of posts should be decremented', () => {
    // 1. test data
    let action = deletePostActionCreater(3);
    let state = {
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
        ]
    }

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(3);
})