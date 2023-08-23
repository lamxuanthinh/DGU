import React, { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";

interface ICommentFormProps {
    handleSubmit: (text: string, parentId?: any) => void;
    submitLabel: string;
    hasCancelButton?: boolean;
    isEditing?: boolean;
    handleCancel?: () => void;
    initialText?: string;
}

const CommentForm = ({
    handleSubmit,
    submitLabel,
    hasCancelButton = false,
    handleCancel,
    initialText = "",
    isEditing,
}: ICommentFormProps) => {
    const [text, setText] = useState(initialText);
    const isTextareaDisabled = text.length === 0;

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        handleSubmit(text);
        setText("");
    };

    const onTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value);
    };

    return (
        <form
            onSubmit={onSubmit}
            className={`${isEditing ? "" : "my-4 p-3"} flex items-center justify-between bg-white rounded-xl`}
        >
            <div className="h-full ml-3">
                {!isEditing && (
                    <Image
                        alt=""
                        width={40}
                        height={40}
                        className="rounded-2xl"
                        src={require("@/public/Images/Profile/Infomation/boy_thanh_lich.png")}
                    />
                )}
            </div>
            <input
                className="text-black w-[75%] rounded-xl p-3 border border-solid border-green-500"
                value={text}
                onChange={(e: any) => {
                    onTextChange(e);
                }}
                placeholder="Add a comment…"
            />
            <button className="comment-form-button mx-2" disabled={isTextareaDisabled} type="submit">
                {submitLabel}
            </button>
            {hasCancelButton && (
                <button type="button" className="comment-form-button ml-[10px]" onClick={handleCancel}>
                    Cancel
                </button>
            )}
        </form>
    );
};

export default CommentForm;
