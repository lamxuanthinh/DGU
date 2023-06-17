import React from 'react'
import { IoMdCopy } from "react-icons/io"
import { BiCut } from "react-icons/bi"
import { TfiPencil } from "react-icons/tfi"
import { RiDeleteBin6Line } from "react-icons/ri"
import { BsCursorText } from "react-icons/bs"
import { GiMusicalNotes } from "react-icons/gi"
import { MdOutlineInsertEmoticon } from "react-icons/md"

export default function Toolbar() {
  return (
    <div className="grid grid-cols-2 grid-rows-5 place-items-center gap-4 px-11 py-9 w-[294px] bg-[#1F1F1F] rounded-[15px]">
      <button className="flex flex-col gap-y-1 items-center text-white cursor-pointer hover:opacity-60">
        <IoMdCopy className="text-3xl"></IoMdCopy>
        <span>Copy</span>
      </button>
      <button className="flex flex-col gap-y-1 items-center text-white cursor-pointer hover:opacity-60">
        <BiCut className="text-3xl"></BiCut>
        <span>Split</span>
      </button>
      <button className="flex flex-col gap-y-1 items-center text-white cursor-pointer hover:opacity-60">
        <TfiPencil className="text-3xl"></TfiPencil>
        <span>Effects</span>
      </button>
      <button className="flex flex-col gap-y-1 items-center text-white cursor-pointer hover:opacity-60">
        <RiDeleteBin6Line className="text-3xl"></RiDeleteBin6Line>
        <span>Delete</span>
      </button> <button className="flex flex-col gap-y-1 items-center text-white cursor-pointer hover:opacity-60">
        <BsCursorText className="text-3xl"></BsCursorText>
        <span>Text</span>
      </button>
      <button className="flex flex-col gap-y-1 items-center text-white cursor-pointer hover:opacity-60">
        <GiMusicalNotes className="text-3xl"></GiMusicalNotes>
        <span>Music</span>
      </button>
      <button className="flex flex-col gap-y-1 items-center text-white cursor-pointer hover:opacity-60">
        <MdOutlineInsertEmoticon className="text-3xl"></MdOutlineInsertEmoticon>
        <span>Sticker</span>
      </button>
    </div>
  )
}
