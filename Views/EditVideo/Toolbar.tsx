import React, { Dispatch, SetStateAction, memo, useRef } from 'react'
import Button from '@/components/common/Button'
import { IoMdCopy } from "react-icons/io"
import { BiCut } from "react-icons/bi"
import { TfiPencil } from "react-icons/tfi"
import { RiDeleteBin6Line } from "react-icons/ri"
import { BsCursorText } from "react-icons/bs"
import { GiMusicalNotes } from "react-icons/gi"
import { MdOutlineInsertEmoticon } from "react-icons/md"
import { useTranslations } from "next-intl";


interface IToolbarProps {
  handleSplit: () => void;
  setSrcMp3: Dispatch<SetStateAction<Blob | undefined>>,
}

function Toolbar({ handleSplit, setSrcMp3 }: IToolbarProps) {
  const t = useTranslations("editvideo");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const onCheckFileMp3 = (file: File) => {
    return file.type === 'audio/mpeg' || file.name.toLowerCase().endsWith('.mp3');
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileObj = event.target.files && event.target.files[0];
    if (fileObj && onCheckFileMp3(fileObj)) {
      const blob = new Blob([fileObj], { type: 'audio/mpeg' });
      setSrcMp3(blob);
    }
  };

  return (
    <div className="grid grid-cols-2 grid-rows-3 place-items-center gap-y-3 px-11 py-9 min-w-[280px] bg-[#121212] rounded-[5px] h-full">
      <Button className="flex flex-col gap-y-1 items-center text-white cursor-pointer px-3 hover:opacity-60">
        <IoMdCopy className="text-3xl" />
        <span>{t('copy')}</span>
      </Button>
      <Button className="flex flex-col gap-y-1 items-center text-white cursor-pointer px-3 hover:opacity-60" onClick={handleSplit}>
        <BiCut className="text-3xl" />
        <span>{t('split')}</span>
      </Button>
      <Button className="flex flex-col gap-y-1 items-center text-white cursor-pointer px-3 hover:opacity-60">
        <TfiPencil className="text-3xl" />
        <span>{t('effects')}</span>
      </Button>
      <Button className="flex flex-col gap-y-1 items-center text-white cursor-pointer px-3 hover:opacity-60">
        <RiDeleteBin6Line className="text-3xl" />
        <span>{t('delete')}</span>
      </Button>
      <Button className="flex flex-col gap-y-1 items-center text-white cursor-pointer px-3 hover:opacity-60">
        <BsCursorText className="text-3xl" />
        <span>{t('text')}</span>
      </Button>
      <Button className="flex flex-col gap-y-1 items-center text-white cursor-pointer px-3 hover:opacity-60" onClick={handleClick}>
        <GiMusicalNotes className="text-3xl" />
        <span>{t('music')}</span>
      </Button>
      <Button className="flex flex-col gap-y-1 items-center text-white cursor-pointer px-3 hover:opacity-60">
        <MdOutlineInsertEmoticon className="text-3xl" />
        <span>{t('sticker')}</span>
      </Button>
      <input
        style={{ display: 'none' }}
        ref={inputRef}
        type="file"
        onChange={handleFileChange}
      />
    </div>
  )
}

export default memo(Toolbar)