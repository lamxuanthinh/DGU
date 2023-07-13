export interface IComment {
    id: string;
    body: string;
    username: string;
    userId: string;
    avatar: any;
    countLiked: number;
    parentId: string | number | null;
    createdAt: string;
}
