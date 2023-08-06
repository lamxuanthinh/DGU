
export interface user {
    name: string,
    avt: string,
} 

export interface comment {
    id: string,
    content_comment: string,
} 

export interface course {
    type: string,
    fee: number|null,
    course_name: string,
}


export interface notification {
    type: string,
    link: string,
    user: user,

    comment: comment|null,

    course: course|null,
    time: string,
}
