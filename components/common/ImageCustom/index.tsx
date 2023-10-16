import Image, { StaticImageData } from "next/image";
interface IImageCustomProps {
    src: StaticImageData | string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
    priority?: boolean;
}

function ImageCustom({ src, alt, width, height, className, priority }: IImageCustomProps) {
    return (
        <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority={priority}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNMyUmpBwAEJQG1p0+ERwAAAABJRU5ErkJggg=="
            className={`${className}`}
        />
    );
}

export default ImageCustom;
