import Image from "next/image";
import iconAi from "@/public/Images/start-ai.svg";
import Button from "@/components/common/Button";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { MdSend } from "react-icons/md";
import { useRef, useState } from "react";
import { IChatMessage } from "@/model";
import Content from "./Content";
import SideBar from "./SideBar";
import Video from "./Video";
import axios from "axios";

const ROLE_CHAT = "user";

interface IChatAiProps {
    onClose: () => void;
}

const ChatAi = ({ onClose }: IChatAiProps) => {
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    const [valueInput, setValueInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [listMessage, setListMessage] = useState<IChatMessage[]>([
        {
            role: "system",
            content: "Hello, I'm DGU AI. How can I help you?",
        },
    ]);

    const onFetchChatAi = async () => {
        try {
            if (textAreaRef.current) {
                textAreaRef.current.style.height = "68px";
            }
            setValueInput("");
            setListMessage((prevState) => [
                ...prevState,
                {
                    role: ROLE_CHAT,
                    content: valueInput,
                },
            ]);
            setIsLoading(true);

            const response: any = await axios.post(
                "https://api.openai.com/v1/chat/completions",
                {
                    messages: [{ content: valueInput, role: "user" }],
                    model: "gpt-3.5-turbo",
                    stream: false,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer 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`,
                    },
                },
            );

            setIsLoading(false);
            setListMessage((prevState) => [
                ...prevState,
                {
                    role: "system",
                    content: response.data.choices[0].message.content,
                },
            ]);
        } catch (error) {
            setIsLoading(false);
            setListMessage((prevState) => [
                ...prevState,
                {
                    role: "system",
                    content: "Sorry, I don't understand. Please try again!",
                },
            ]);
            console.log("Error during sending message chat ai: " + error);
        }
    };

    const handleEnterQuestion = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && valueInput.trim() !== "") {
            e.preventDefault();
            onFetchChatAi();
        }
    };

    const handleSubmitQuestion = () => {
        if (valueInput.trim() !== "") {
            onFetchChatAi();
        }
    };

    const handleChangeValueInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValueInput(e.target.value);
        adjustTextAreaHeight(e);
    };

    const adjustTextAreaHeight = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const maxHeight = 160;
        e.target.style.height = "inherit";
        const newHeight = Math.min(e.target.scrollHeight, maxHeight);
        e.target.style.height = `${newHeight}px`;
    };

    return (
        <div className="fixed inset-0 bg-[#2C2C2C] select-text">
            <div className="flex justify-between items-center px-3 py-2.5 border border-b border-[#9D9D9D]/[.3] h-12">
                <Button className="px-3 text-xl">
                    <AiOutlineMenu />
                </Button>
                <div className="flex space-x-2">
                    <Image src={iconAi} alt="icon start" />
                    <h3 className="font-bold">Ask DGU AI</h3>
                </div>
                <Button className="px-3 text-xl" onClick={onClose}>
                    <AiOutlineClose />
                </Button>
            </div>
            <div className="flex h-[calc(100%-48px)]">
                <Video />
                <div className="flex-1 pt-4 px-5 border-x-[1px] border-[#9D9D9D]/[.3] flex flex-col">
                    <Content isLoading={isLoading} listMessage={listMessage} />
                    <div className="flex items-center space-x-2 border-t-[1px] border-[#9D9D9D]/[.3] mb-3">
                        <textarea
                            ref={textAreaRef}
                            value={valueInput}
                            onChange={handleChangeValueInput}
                            onKeyDown={handleEnterQuestion}
                            placeholder="Send a message"
                            className="flex-1 px-4 pt-6 outline-none bg-transparent resize-none"
                        />
                        <Button
                            onClick={handleSubmitQuestion}
                            className="w-[30px] h-[30px] text-xl rounded-[2px] bg-primary text-[#0937D9] flex items-center justify-center self-end mb-4"
                        >
                            <MdSend />
                        </Button>
                    </div>
                </div>
                <SideBar />
            </div>
        </div>
    );
};

export default ChatAi;
