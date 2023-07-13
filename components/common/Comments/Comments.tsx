import { useState, useEffect, Dispatch, SetStateAction } from "react";
import CommentForm from "@/components/common/Comments/CommentForm";
import Comment from "@/components/common/Comments/Comment";
import {
    getComments as getCommentsApi,
    createComment as createCommentApi,
    updateComment as updateCommentApi,
    deleteComment as deleteCommentApi,
} from "@/apis/api";
import { IComment } from "@/model/comment";

interface IComments {
    currentUserId: string;
    isComment: boolean;
    setComment: Dispatch<SetStateAction<boolean>>;
}

const Comments: React.FC<IComments> = ({ currentUserId, isComment, setComment }: IComments) => {
    const [backendComments, setBackendComments] = useState<IComment[]>([]);
    const [activeComment, setActiveComment] = useState<Comment | null>(null);
    const rootComments = backendComments.filter((backendComment) => backendComment.parentId === null);

    const getReplies = (commentId: string) =>
        backendComments
            .filter((backendComment) => backendComment.parentId === commentId)
            .sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());

    const addComment = (text: string, parentId: any) => {
        createCommentApi(text, parentId).then((comment: any) => {
            setBackendComments([comment, ...backendComments]);
            setActiveComment(null);
        });
    };

    const updateComment = (text: string, commentId: string) => {
        updateCommentApi(text).then(() => {
            const updatedBackendComments = backendComments.map((backendComment) => {
                if (backendComment.id === commentId) {
                    return { ...backendComment, body: text };
                }
                return backendComment;
            });
            setBackendComments(updatedBackendComments);
            setActiveComment(null);
        });
    };

    const deleteComment = (commentId: string) => {
        if (window.confirm("Are you sure you want to remove comment?")) {
            deleteCommentApi().then(() => {
                const updatedBackendComments = backendComments.filter(
                    (backendComment) => backendComment.id !== commentId,
                );
                setBackendComments(updatedBackendComments);
            });
        }
    };

    useEffect(() => {
        getCommentsApi().then((data: IComment[]) => {
            setBackendComments(data);
        });
    }, []);

    return (
        <div
            className={`${
                isComment ? "flex" : "hidden"
            } overflow-hidden flex justify-end fixed rounded-xl top-[20%] right-[8%] w-[50%] h-[65%] bg-[#F5F6FA]`}
        >
            <div className="w-full h-full">
                <div className="py-4 px-4 max-h-[82%] snap-y w-full h-full overflow-auto snap-mandatory scrollbar-none">
                    <div className="overflow-y-auto">
                        {rootComments.map((rootComment) => (
                            <Comment
                                key={rootComment.id}
                                comment={rootComment}
                                replies={getReplies(rootComment.id)}
                                activeComment={activeComment}
                                setActiveComment={setActiveComment}
                                addComment={addComment}
                                deleteComment={deleteComment}
                                updateComment={updateComment}
                                currentUserId={currentUserId}
                            />
                        ))}
                    </div>
                </div>
                <CommentForm submitLabel="Send" handleSubmit={addComment} />
            </div>
        </div>
    );
};

export default Comments;
