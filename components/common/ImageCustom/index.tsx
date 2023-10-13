import Image, { StaticImageData } from "next/image";
import { useState } from "react";

interface IImageCustomProps {
    src: StaticImageData;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
    priority?: boolean;
}

function ImageCustom({ src, alt, width, height, className, priority }: IImageCustomProps) {
    const [isLoading, setIsLoading] = useState<boolean>(true);

    return (
        <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority={priority}
            className={`transition-all ${className} ${isLoading ? "blur-lg" : "blur-0"}`}
            onLoad={() => setIsLoading(false)}
        />
    );
}

export default ImageCustom;
