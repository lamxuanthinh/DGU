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
import { AiOutlineClose } from "react-icons/ai";

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
            } overflow-hidden fixed rounded-t-xl sm:rounded-xl bottom-0 sm:bottom-auto sm:top-[20%] left-0 sm:left-auto sm:right-[10%] w-full md:w-[80%] lg:w-[50%] bg-[#F5F6FA] dark:bg-[#2C2C2C]`}
        >
            <div className="w-full h-full flex flex-col justify-between">
                <div className="flex justify-end py-2 px-6">
                    <div
                        className="px-3 py-1 bg-[#f0f0f0] dark:bg-[#474747] rounded-md hover:cursor-pointer hover:bg-[#e6e6e6] dark:hover:bg-[#3c3c3c]"
                        onClick={() => {
                            setComment(false);
                        }}
                    >
                        <AiOutlineClose className="text-[#333] dark:text-[#fff] text-[18px] sm:text-[22px]" />
                    </div>
                </div>
                <div className="px-3 sm:px-4 lg:mb-4 snap-y w-full h-[400px] sm:h-[500px] lg:h-[350px] overflow-auto snap-mandatory scrollbar-none">
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
