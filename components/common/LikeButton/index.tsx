import React, { useState } from "react";

function LikeButton() {
    const [isLiked, setIsLiked] = useState(false);

    const toggleLike = () => {
        setIsLiked(!isLiked);
    };

    return (
        <div>
            <div className="rounded-full h-[40px]  flex items-center justify-center transition-all duration-100 ease-in">
                <div
                    className={`bg-heart h-[100px] w-[100px] bg-left cursor-pointer absolute ${
                        isLiked ? "animate-liked" : ""
                    }`}
                    onClick={toggleLike}
                ></div>
            </div>
        </div>
    );
}

export default LikeButton;
