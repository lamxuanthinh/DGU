import { vdo } from "@/apis/vdo";
import { useRef } from "react";

async function handleSubmitFile(file: File, title: string) {
    try {
        const dataCloudPayload = {
            titleVideo: title,
        };

        const dataCloud = await vdo.getDataCloud(dataCloudPayload);
        
        
        const uploadCloudPayload = {
            dataCloud: dataCloud.clientPayload,
            file: file,
        };

        await vdo.uploadCloud(uploadCloudPayload);
    } catch (error) {
        console.log(error);
    }
}
export default function Index() {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <form
            onSubmit={async (event) => {
                event.preventDefault();
                if (inputRef.current?.files != null) {
                    const file = inputRef.current.files[0];
                    handleSubmitFile(file, "OK");
                }
            }}
        >
            <input type="file" name="video" ref={inputRef} />
            <button type="submit">Submit</button>
        </form>
    );
}
