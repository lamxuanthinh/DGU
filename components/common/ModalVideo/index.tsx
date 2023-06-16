import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  pathVideo: string;
}

const ModalVideo = ({ isOpen, setIsOpen, pathVideo }: Props) => {
  const videoRef1 = useRef<HTMLVideoElement>(null);

  const handleCloseModal = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [setIsOpen]);

  return (
    <div
      className="fixed top-0 right-0 left-0 bottom-0 bg-slate-300 flex items-center justify-center"
      onClick={handleCloseModal}
    >
      {isOpen && (
        <div className="h-[95%]">
          <video
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            className="h-full"
            loop
            controls
            ref={videoRef1}
          ></video>
        </div>
      )}
    </div>
  );
};

export default ModalVideo;
