
import React from "react";
import { BiHash, BiHomeCircle, BiUser } from "react-icons/bi";
import {  BsBell, BsBookmark, BsEnvelope, BsTwitter } from "react-icons/bs";


interface SideBarIcon {
  tittle : string,
  icon : React.ReactNode
}

const SideBarIcons :SideBarIcon[] = [
  {
    tittle :"Home",
    icon: <BiHomeCircle/>
  },
  {
    tittle:"Explore",
    icon:<BiHash/>
  },
  {
    tittle:"Notifications",
    icon:<BsBell/>
  },
  {
    tittle:"Messages",
    icon: <BsEnvelope/>
  },
  {
    tittle:"Bookmarks",
    icon:<BsBookmark/>
  },{
    tittle:"Profile",
    icon:<BiUser/>
  }
  

]

export default function Home() {
  return (
    <div className=" grid grid-cols-12 h-screen w-screen px-48">
      <div className=" col-span-3  pt-6">
        <div className=" text-3xl h-fit w-fit hover:bg-gray-600 rounded-full p-4 cursor-pointer transition-all">
        <BsTwitter />
        </div>

        <div className=" mt-2 font-semibold pr-4">
          <ul>
          {
          SideBarIcons.map((item, index) =><li 
          className=" flex justify-start items-center gap-4 hover:bg-gray-600  px-4 py-2 cursor-pointer w-fit rounded-full mt-1 "
           key={index}>
             <span className=" text-2xl">{item.icon}</span> 
             <span className=" text-lg">{item.tittle}</span></li> )
         }
          </ul>
          <div className="mt-3 px-8">
          <button className=" bg-[#1d9bf0] py-2 rounded-full w-full">Tweet</button>
          </div>
        </div>
      </div>

      <div className=" col-span-6 border-r-[1px] border-l-[1px] border-gray-300 "></div>
      <div className=" col-span-3 "></div>
    </div>
  );
}
