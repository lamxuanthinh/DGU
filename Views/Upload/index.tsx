import React, { HtmlHTMLAttributes, useRef, useState } from "react";
import fileType from "file-type";
// import ClamAV from "clamav.js";


import { FaCloudUploadAlt } from "react-icons/fa";


// handel if file is not a video file.
function handleFileSelect(videoFile: File) : boolean {
    const file = videoFile;

    const fileName = file.name;
    const fileType = file.type;

    // Check extend section of file.
    const fileExtension : string = fileName.split('.').pop()!.toLocaleLowerCase();
    const allowedExtensions : string[] = ['mp4', 'avi', 'mov']; 

    if(allowedExtensions.includes(fileExtension)) 
    {
        return true;
    }
    else 
    {
        return false;
    }
}


export default function index() {

    // import
        // create reference variable.
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const  inputRef = useRef<HTMLInputElement>(null);
        // create files to drag and drop.
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isDragging, setIsDragging] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedVideo, setSelectedVideo] = useState<File | null>(null);


    // handle drag and drop file
    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setIsDragging(false);
    
        const files = event.dataTransfer.files;
        const videoFile = files[0];
        setSelectedVideo(videoFile);
        
        if(inputRef.current) {
            inputRef.current.files = event.dataTransfer.files;

            if (inputRef.current.files.length > 0) {
                console.log('Đã chọn một file' + inputRef.current.files[0].name);

                if(handleFileSelect(inputRef.current.files[0]) === true)
                {
                    alert('This is video file.');
                }
                else
                {
                    alert('This is not video file.');
                    inputRef.current.value = ''; // delete value of input file
                }
            } else {
                console.log('Không có file được chọn');
            }
        }

        console.log('Dropped video file: ', videoFile.name);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if(files != null)
        {
            console.log('Have files: ', files[0].name);
            if(handleFileSelect(files[0]) === true)
            {
                alert('This is video file.');
            }
            else
            {
                alert('This is not video file.');
                event.target.value = ''; // delete value of input file
            }
        }
    };

    // handle click input file
    const handleButtonClick = () => {
        if (inputRef.current) {
            inputRef.current.click();
        }
    }
    

    // handle files when the input field is changed 
    // const clamav = new ClamAV();







    return (
        <>
            <div className="w-[100%] h-[100%]  flex flex-col justify-center items-center ">
                <div className="w-[80%] h-[100%]  flex flex-col ">
                    <div className="w-[100%] h-[100px]  flex justify-start items-center  ">
                        <p className="font-bold text-[25px]  ">Upload your file below</p>
                    </div>
                    <div className="w-[100%] h-[500px]  flex justify-center items-center">
                        <div 
                            className={`w-[100%] h-[400px] border-dashed border-2 border-black flex justify-center items-center drag-drop-area ${isDragging ? 'dragging' : ''}`}
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop}
                        >
                            <div className="w-[50%] h-[360px]  flex flex-col justify-start items-center ">
                                <div className="w-[100px] h-[100px] ">
                                    <FaCloudUploadAlt fontSize={"100px"} />
                                </div>
                                <div className="w-[100%] h-[60px] my-[10px]  flex justify-center items-end">
                                    <p className="font-bold text-[25px] ">
                                        Drag your file here
                                    </p>
                                </div>
                                <div className="w-[100%] h-[60px] my-[10px]  flex justify-center items-start">
                                    <p className="font-bold text-[25px] ">
                                        Or
                                    </p>
                                </div>
                                <div className="w-[100%] h-[70px] my-[10px]  flex justify-center items-center">
                                    <input className="hidden" type="file" accept="video/*" ref={inputRef} onChange={handleInputChange} />
                                    
                                    <div onClick={handleButtonClick} className="w-[180px] h-[70px] border-2 border-solid boder-[#000000] flex justify-center items-center cursor-pointer">
                                        <p className="font-bold text-[25px]">Browser</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
