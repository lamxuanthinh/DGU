import { useState } from "react";
import CommentForm from "@/components/common/Comments/CommentForm";
import Image from "next/image";
import { AiOutlineLike, AiTwotoneLike } from "react-icons/ai";
import { IComment } from "@/model/comment";

interface CommentProps {
    comment: IComment;
    replies: any;
    setActiveComment: any;
    activeComment: any;
    updateComment: (text: string, commentId: string) => void;
    deleteComment: (commentId: string) => void;
    addComment: (text: string, parentId: string | null) => void;
    parentId?: string | null;
    currentUserId: string;
}

const Comment: React.FC<CommentProps> = ({
    comment,
    replies,
    setActiveComment,
    activeComment,
    updateComment,
    deleteComment,
    addComment,
    parentId = null,
    currentUserId,
}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [isReplying, setIsReplying] = useState(false);
    const fiveMinutes = 300000;
    const timePassed = new Date().getTime() - new Date(comment.createdAt).getTime() > fiveMinutes;
    const canDelete = currentUserId === comment.userId && replies.length === 0 && !timePassed;
    const canReply = Boolean(currentUserId);
    const canEdit = currentUserId === comment.userId && !timePassed;
    const replyId = parentId ? parentId : comment.id;
    const createdAt = new Date(comment.createdAt).toLocaleDateString();
    const [isLiked, setIsLiked] = useState(true);

    const handleEdit = () => {
        setActiveComment({ id: comment.id, type: "editing" });
        setIsEditing(true);
    };

    const handleReply = () => {
        setActiveComment({ id: comment.id, type: "replying" });
        setIsReplying(!isReplying);
    };

    const handleCancel = () => {
        setActiveComment(null);
        setIsEditing(false);
        setIsReplying(false);
    };

    const handleUpdateComment = (text: string) => {
        updateComment(text, comment.id);
        setIsEditing(false);
    };

    const handleDeleteComment = () => {
        deleteComment(comment.id);
    };

    const handleAddComment = (text: string) => {
        addComment(text, replyId);
        setIsReplying(false);
    };

    const handleLikeButton = () => {
        if (isLiked) {
            comment.countLiked++;
        } else {
            comment.countLiked--;
        }
        setIsLiked(!isLiked);
    };

    return (
        <div key={comment.id} className="flex my-2 select-none">
            <div className="w-full">
                <div className="bg-white dark:bg-[#393939] text-[#5357B6] dark:text-white flex justify-start items-center p-6 rounded-2xl">
                    <div className="w-[50px] p-3 rounded-2xl h-full">
                        <p className="text-[20px] text-center hover:cussor-pointer">{comment.countLiked}</p>
                        {isLiked ? (
                            <AiOutlineLike
                                onClick={() => {
                                    handleLikeButton();
                                }}
                                className="my-2 hover:cursor-pointer"
                                fontSize={25}
                            />
                        ) : (
                            <AiTwotoneLike
                                onClick={() => {
                                    handleLikeButton();
                                }}
                                className="my-2 hover:cursor-pointer"
                                fontSize={25}
                            />
                        )}
                    </div>
                    <div className="mx-6 w-full overflow-hidden">
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex justify-start">
                                <Image
                                    alt=""
                                    width={30}
                                    height={30}
                                    className="rounded-2xl"
                                    src={require(`@/public/${comment.avatar}`)}
                                />
                                <div className="text-[16px] font-medium mx-3">{comment.username}</div>
                            </div>
                            <div className="text-[13px] font-medium">{createdAt}</div>
                        </div>
                        {!isEditing && (
                            <div className="text-[16px] w-[95%] font-normal text-[#67727E] dark:text-white">
                                {comment.body}
                            </div>
                        )}
                        {isEditing && (
                            <CommentForm
                                isEditing={isEditing}
                                submitLabel="Update"
                                hasCancelButton
                                initialText={comment.body}
                                handleSubmit={handleUpdateComment}
                                handleCancel={handleCancel}
                            />
                        )}
                    </div>
                </div>
                <div className="flex flex-col text-sm text-gray-600 cursor-pointer mt-2 ml-[8%]">
                    <div className="flex justify-between">
                        <div>
                            {canReply && (
                                <div className="w-full">
                                    <div
                                        className="comment-action w-full text-[#6357b6] dark:text-white font-semibold"
                                        onClick={handleReply}
                                    >
                                        Reply
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="flex justify-center">
                            {canEdit && (
                                <div
                                    className="comment-action text-[#6357b6] dark:text-white font-semibold"
                                    onClick={handleEdit}
                                >
                                    Edit
                                </div>
                            )}
                            {canDelete && (
                                <div
                                    className="comment-action text-[#6357b6] dark:text-white font-semibold"
                                    onClick={handleDeleteComment}
                                >
                                    Delete
                                </div>
                            )}
                        </div>
                    </div>
                    {isReplying && <CommentForm submitLabel="Reply" handleSubmit={handleAddComment} />}
                </div>

                {replies.length > 0 && (
                    <div className="ml-[8%]">
                        {replies.map((reply: any) => (
                            <Comment
                                comment={reply}
                                key={reply.id}
                                setActiveComment={setActiveComment}
                                activeComment={activeComment}
                                updateComment={updateComment}
                                deleteComment={deleteComment}
                                addComment={addComment}
                                parentId={comment.id}
                                replies={[]}
                                currentUserId={currentUserId}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Comment;
