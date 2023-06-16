import axios from "axios";
import React, { useRef, useState } from "react";

import { FaCloudUploadAlt } from "react-icons/fa";


// handle if file is not a video file.
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




export default function Upload() {

    // IMPORT
        // create reference variable.
    const  inputRef = useRef<HTMLInputElement>(null);

        // create files to drag and drop.
    const [isDragging, setIsDragging] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState<File | null>(null);



    // HANDLE
    // handle drag and drop file
    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = async (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setIsDragging(false);
    
        const files = event.dataTransfer.files;
        const videoFile = files[0];
        setSelectedVideo(videoFile);
        
        if(inputRef.current) {
            inputRef.current.files = event.dataTransfer.files;

            if (inputRef.current.files.length > 0) {

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
    };

    const handleInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if(files != null)
        {
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
    



    return (
        <>
            <div className="w-[100%] h-[100%]  flex flex-col justify-center items-center ">
                <div className="w-[80%] h-[100%]  flex flex-col ">
                    <div className="w-[100%] h-[100px]  flex justify-start items-center  ">
                        <p className="font-bold text-[25px]  ">Upload your file below</p>
                    </div>
                    <div className="w-[100%] h-[90%]  flex justify-center items-center">
                        <div 
                            className={`w-[100%] h-[90%] border-dashed border-2 border-black flex justify-center items-center drag-drop-area ${isDragging ? 'dragging' : ''}`}
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop}
                        >
                            <div className="w-[50%] h-[90%]  flex flex-col justify-center items-center ">
                                <div className="w-[100%] h-1/3 flex flex-col justify-center items-center">
                                    <FaCloudUploadAlt className="h-full w-full flex items-center justify-center " size={100}/>
                                </div>
                                <div className="w-[100%] h-1/3 my-[10px] flex flex-col justify-center items-center">
                                    <div className="w-[100%] h-[60px] my-[10px]  flex justify-center items-end">
                                        <p className="font-bold  text-2xl ">
                                            Drag your file here
                                        </p>
                                    </div>
                                    <div className="w-[100%] h-[60px] my-[10px]  flex justify-center items-start">
                                        <p className="font-bold  text-2xl ">
                                            Or
                                        </p>
                                    </div>
                                </div>
                                <div className="w-[100%] h-1/3 my-[10px]  flex justify-center items-center">
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
