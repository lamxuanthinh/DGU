import React, { Dispatch, SetStateAction, memo } from 'react'
import Image from 'next/image';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { GrUndo, GrRedo } from "react-icons/gr"
import Menu from '@/components/common/Menu';
import Button from '@/components/common/Button';
import { dataMenuNav } from '@/public/data/menuNavigation';
interface INavbarProps {
  onUndo?: () => void;
  onRedu?: () => void;
  setIsModal: Dispatch<SetStateAction<boolean>>,
}

function Navbar({ onUndo, onRedu, setIsModal }: INavbarProps) {

  const handleNextEdit = () => {
    console.log(1);

    setIsModal(true)
  }

  return (
    <div className="h-[54px] px-[15px] py-[10px] font-semibold  text-white rounded-[5px] bg-[#121212] mb-[5px]">
      <nav className="flex items-center justify-between h-full">
        <div className="flex">
          <Button href="/back" className="!p-1 " type='text' leftIcon={<IoIosArrowBack className="text-2xl"></IoIosArrowBack>}>
            Back
          </Button>
          <div className="text-2xl flex items-center">
            <Button className="mr-1 !min-w-[32px] !p-1" type='text' onClick={onUndo}>
              <GrUndo></GrUndo>
            </Button>
            <Button className="mr-1 !min-w-[32px] !p-1" type='text' onClick={onRedu}>
              <GrRedo></GrRedo>
            </Button>
          </div>
        </div>
        <div>
          <div className="flex">
            <Menu menuItems={dataMenuNav} theme="black" className="!top-[47px] !right-[-164px]">
              <div className='rounded-[50%] border-[#fff] border-solid border-[4px] '>
                <Image
                  src={require("@/public/Images/Profile/Infomation/boy_thanh_lich.png")}
                  width={34}
                  height={34}
                  className="rounded-full cursor-pointer"
                  alt="logo"
                />
              </div>
            </Menu>
            <Button className="!py-1" type='text' rightIcon=
              {<IoIosArrowForward className="text-2xl"></IoIosArrowForward>}
              onClick={handleNextEdit}>
              Next
            </Button>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default memo(Navbar)