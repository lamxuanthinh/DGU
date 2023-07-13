export const getComments = async () => {
    return [
        {
            id: "1",
            body: "Woah, your project looks awesome! How long have you been coding for? I’m still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
            username: "Jocelyn Lam",
            userId: "1",
            countLiked: 5,
            parentId: null,
            avatar: "Images/Profile/Infomation/boy_thanh_lich.png",
            createdAt: "2021-08-16T23:00:33.010+02:00",
        },
        {
            id: "2",
            body: "@ramsesmiron I couldn’t agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
            username: "Kenny",
            userId: "2",
            countLiked: 3,
            avatar: "Images/Profile/Infomation/boy_thanh_lich.png",

            parentId: null,
            createdAt: "2021-08-16T23:00:33.010+02:00",
        },
        {
            id: "3",
            body: "@ramsesmiron I couldn’t agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
            username: "Kenny ",
            userId: "2",
            countLiked: 4,
            avatar: "Images/Profile/Mycourse/boy_thoi_trang.png",
            parentId: "1",
            createdAt: "2021-08-16T23:00:33.010+02:00",
        },
        {
            id: "4",
            body: "Woah, your project looks awesome! How long have you been coding for? I’m still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
            username: "Kenny ",
            userId: "2",
            countLiked: 4,
            avatar: "Images/Profile/Mycourse/boy_thoi_trang.png",

            parentId: "2",
            createdAt: "2021-08-16T23:00:33.010+02:00",
        },
    ];
};

export const createComment = async (text, parentId = null) => {
    return {
        id: Math.random().toString(36).substr(2, 9),
        body: text,
        parentId,
        countLiked: 0,
        userId: "1",
        avatar: "Images/Profile/Infomation/boy_thanh_lich.png",
        username: "John",
        createdAt: new Date().toISOString(),
    };
};

export const updateComment = async (text) => {
    return { text };
};

export const deleteComment = async () => {
    return {};
};
