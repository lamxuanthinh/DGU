import React from 'react'

export default function Video() {
  return (
    <div className="flex-1 flex justify-center bg-[#1F1F1F] rounded-xl overflow-hidden">
      <video
        src="https://www.w3schools.com/html/mov_bbb.mp4"
        loop
        controls
        className="h-full"
      ></video>
    </div>
  )
}
