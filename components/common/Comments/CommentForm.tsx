import React, { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";

interface CommentFormProps {
    handleSubmit: any;
    submitLabel: string;
    hasCancelButton?: boolean;
    isEditing?: boolean;
    handleCancel?: () => void;
    initialText?: string;
}

const CommentForm: React.FC<CommentFormProps> = ({
    handleSubmit,
    submitLabel,
    hasCancelButton = false,
    handleCancel,
    initialText = "",
    isEditing,
}) => {
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
            className={`bg-white dark:bg-[#393939] ${
                isEditing ? "" : "p-3"
            } flex items-center justify-between  rounded-xl mb-1`}
        >
            <div className="h-full ml-3 hidden sm:block">
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
                className="text-black text-[14px] sm:text-[16px] w-[75%] dark:text-white rounded-xl p-3 border border-solid border-green-500 dark:border-white"
                value={text}
                onChange={(e: any) => {
                    onTextChange(e);
                }}
                placeholder="Add a comment…"
            />
            <button
                className="comment-form-button mx-2 text-[14px] sm:text-[16px]"
                disabled={isTextareaDisabled}
                type="submit"
            >
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
