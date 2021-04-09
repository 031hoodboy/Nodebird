export const initialState = {
    mainPosts: [{
        id: 1,
        User: {
            id: 1,
            nickname: '제로초',
        },
        content: '펏 번째 게시글 #해시태그 #익스프레스',
        Images: [{
            src: 'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s750x750/152144335_148798393753498_6651606762140843488_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=110&_nc_ohc=7R-EHwPhrhUAX9HALvJ&edm=AP_V10EAAAAA&ccb=7-4&oh=50bae144afa77ae47ca03610e81fdfb2&oe=608EBE56&_nc_sid=4f375e'
        }, {
            src: 'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/89675718_2405241793026491_8345194621754419668_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=111&_nc_ohc=nG-E4ZesvNMAX-TYbJA&edm=ABfd0MgAAAAA&ccb=7-4&oh=e5a93276913cf74dbee8beb66a322ab6&oe=60901DB3&_nc_sid=7bff83'
        }, {
            src: 'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/60812481_309979556571256_8475283215152231833_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=UnGC7h-vDgUAX9_kP0_&edm=ABfd0MgAAAAA&ccb=7-4&oh=e76807dd9af5b952efbf209a9f2fc944&oe=60917BFE&_nc_sid=7bff83'
        }],
        Comments: [{
            User: {
                nickname: 'nero',
            }, 
            content: '우와 개정판이 나왔군요 ~',
            },{
            User: {
                nickname: 'hero',
            },
            content: '얼른 사고싶어요 ~'
        }]
    }],
    imagePaths: [],
    postAdded: false,
}

const ADD_POST = 'ADD_POST';
export const addPost = {
    type: ADD_POST,
}

const dummyPost = {
    id:2,
    content: '더미데이터입니다.',
    User: {
        id: 1,
        nickname: '제로초',
    },
    Images: [],
    Comments: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_POST:
            return {
                ...state,
                mainPosts: [dummyPost, ...state.mainPosts],
                postAdded: true,
            }
        default:
            return state;
    }
};

export default reducer; 