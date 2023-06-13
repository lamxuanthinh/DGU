import axios from "axios";
import React, { useRef, useState } from "react";

import { FaCloudUploadAlt } from "react-icons/fa";

import { upload } from "@/apis/upload";

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

// handle check viruss video file.  
async function checkFileForViruses(file: File): Promise<boolean> {


    // upload file on VirussTotal
    const response: any = await upload.uploadFile(file);

    const data = response;
    const videoId = data.data.id;
    
    
    // get md5 analysis file on VirusTotal
    const responeAnalysis: any = await upload.getMd5(videoId);
    const md5File = responeAnalysis.meta.file_info.md5;


    // get result file on VirusTotal
    const responeDetect = await upload.getResult(md5File);
    const hasViruss : number = responeDetect.data.attributes.last_analysis_stats.malicious;
    
    console.log("Successful ScanViruss! ");
    

    if(hasViruss > 0)
    {
        return true; // This mean has the viruss in this file.
    }   
    else
    {
        return false; // This mean hasn't the viruss in this file.
    }
}




export default function Upload() {

    // IMPORT
        // create reference variable.
    const  inputRef = useRef<HTMLInputElement>(null);

        // create files to drag and drop.
    const [isDragging, setIsDragging] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState<File | null>(null);

        // import auseUsestate  variable to loading when checking viruss through API.
    const [loading, setLoading] = useState(false);



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
                    
                    const waitingToLoading = async (inputRef : HTMLInputElement) => {
                        try {
                            setLoading(true);
                            const hasVirus = await checkFileForViruses(files[0]);
                            setLoading(false);
                            

                            if(hasVirus == true) 
                            {
                                alert('This video file is contain Viruss');
                                inputRef.value = ''; // delete value of input file
                            }
                            else 
                            {
                                alert('This video file is not contain Viruss.');
                            }
                        } catch(error) {
                            setLoading(false);
                            alert('Error! An error occurred. Please try again later.')
                        }
                    }
                    await waitingToLoading(inputRef.current);
                    
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
                const waitingToLoading = async (event : React.ChangeEvent<HTMLInputElement>) => {
                    try {
                        setLoading(true);
                        const hasVirus = await checkFileForViruses(files[0]);
                        setLoading(false);
                        

                        if(hasVirus == true) 
                        {
                            alert('This video file is contain Viruss');
                            event.target.value = ''; // delete value of input file
                        }
                        else 
                        {
                            alert('This video file is not contain Viruss.');
                        }
                    } catch(error) {
                        setLoading(false);
                        alert('Error! An error occurred. Please try again later.')
                    }
                }
                await waitingToLoading(event);
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
            {
            loading && 
            <div className="w-[100%] h-[100%] bg-[#0b0b0bc2] absolute top-0 left-0 ">
                <div role="status" className="w-[100%] h-[100%] flex flex-col justify-center items-center">
                    <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
                    <span className="font-bold text-[20px] text-[#ffffff] ">The system are checking Viruss in your file. Please waiting the minutes.</span>
                </div>
            </div>
            }
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
