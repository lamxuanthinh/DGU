import React, { MouseEventHandler, memo } from 'react'
import { IoMdCopy } from "react-icons/io"
import { BiCut } from "react-icons/bi"
import { TfiPencil } from "react-icons/tfi"
import { RiDeleteBin6Line } from "react-icons/ri"
import { BsCursorText } from "react-icons/bs"
import { GiMusicalNotes } from "react-icons/gi"
import { MdOutlineInsertEmoticon } from "react-icons/md"

function Toolbar({ onClick }: { onClick: MouseEventHandler<HTMLButtonElement> }) {
  return (
    <div className="grid grid-cols-2 grid-rows-3 grid-flow-row-dense place-items-center gap-y-3 px-11 py-9 min-w-[280px] bg-[#121212] rounded-[5px] h-full">
      <button className="flex flex-col gap-y-1 items-center text-white cursor-pointer px-3 hover:opacity-60">
        <IoMdCopy className="text-3xl"></IoMdCopy>
        <span>Copy</span>
      </button>
      <button className="flex flex-col gap-y-1 items-center text-white cursor-pointer px-3 hover:opacity-60" onClick={onClick}>
        <BiCut className="text-3xl"></BiCut>
        <span>Split</span>
      </button>
      <button className="flex flex-col gap-y-1 items-center text-white cursor-pointer px-3 hover:opacity-60">
        <TfiPencil className="text-3xl"></TfiPencil>
        <span>Effects</span>
      </button>
      <button className="flex flex-col gap-y-1 items-center text-white cursor-pointer px-3 hover:opacity-60">
        <RiDeleteBin6Line className="text-3xl"></RiDeleteBin6Line>
        <span>Delete</span>
      </button> <button className="flex flex-col gap-y-1 items-center text-white cursor-pointer px-3 hover:opacity-60">
        <BsCursorText className="text-3xl"></BsCursorText>
        <span>Text</span>
      </button>
      <button className="flex flex-col gap-y-1 items-center text-white cursor-pointer px-3 hover:opacity-60">
        <GiMusicalNotes className="text-3xl"></GiMusicalNotes>
        <span>Music</span>
      </button>
      <button className="flex flex-col gap-y-1 items-center text-white cursor-pointer px-3 hover:opacity-60">
        <MdOutlineInsertEmoticon className="text-3xl"></MdOutlineInsertEmoticon>
        <span>Sticker</span>
      </button>
    </div>
  )
}

export default memo(Toolbar)