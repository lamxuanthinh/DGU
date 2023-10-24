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
            {isLoading && <div className=" absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse "></div>}
            <Image
                fill
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
