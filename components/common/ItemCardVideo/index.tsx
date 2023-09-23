import Image from "next/image";

interface IItemCardVideoProps {
    dataVideo: any;
}

function ItemCardVideo({ dataVideo }: IItemCardVideoProps) {
    const { srcImage, title, author, view, timeCreate } = dataVideo;

    return (
        <div className="2xl:w-1/5 xl:w-1/3 md:w-1/2 w-full p-3 cursor-pointer hover:scale-105 transition-transform duration-500 dark:shadow-xl">
            <div className="min-w-[300px]">
                <div className="flex flex-col ">
                    <div className="h-[200px] rounded-[5px] overflow-hidden 2xl:h-[130px] relative border-2 border-solid border-[#A0A0A0]">
                        <Image src={srcImage} alt="course image" className="w-full h-full" />
                    </div>
                    <div className="px-3 py-4">
                        <h3 className="text-lg leading-6 font-semibold line-clamp-2">{title}</h3>
                        <p className="my-1 text-[#757474]">{author} 💻</p>
                        <p className="text-[#757474]">
                            {view} views • {timeCreate}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemCardVideo;
