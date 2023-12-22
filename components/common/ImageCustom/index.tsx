import Image, { StaticImageData } from "next/image";
import { useState } from "react";
interface IImageCustomProps {
    src: StaticImageData | string;
    alt: string;
    className?: string;
    priority?: boolean;
}

function ImageCustom({ src, alt, className, priority }: IImageCustomProps) {
    const [isLoading, setIsLoading] = useState<boolean>(true);

    return (
        <div className={`overflow-hidden relative ${className}`}>
            {isLoading && (
                <div className=" absolute inset-0 bg-[#E4E6EB] dark:bg-[#8A8D91] opacity-25 animate-pulse "></div>
            )}
            <Image
                onLoad={() => {
                    setIsLoading(false);
                }}
                src={src}
                alt={alt}
                priority={priority}
                className="object-cover"
            />
        </div>
    );
}

export default ImageCustom;
