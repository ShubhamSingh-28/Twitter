
import FeedCard from "@/components/FeedCard";
import React from "react";
import { BiHash, BiHomeCircle, BiMoney, BiUser } from "react-icons/bi";
import {  BsBell, BsBookmark, BsEnvelope, BsTwitter } from "react-icons/bs";
import { SlOptions } from "react-icons/sl";


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
  },
  {
    tittle:"TwitterBlue",
    icon:<BiMoney/>
  },
  {
    tittle:"Profile",
    icon:<BiUser/>
  },
  {
    tittle:"More Options",
    icon:<SlOptions/>
  }
  

]

export default function Home() {
  return (
    <div className=" grid grid-cols-12 h-screen max-w-full w-screen px-48">

      <div className=" col-span-3 ml-14  pt-1">
        <div className=" text-2xl h-fit w-fit hover:bg-gray-600 rounded-full p-4 cursor-pointer transition-all">
        <BsTwitter />
        </div>

        <div className=" mt-1 font-semibold pr-4">
          <ul>
          {
          SideBarIcons.map((item, index) =><li 
          className=" flex justify-start items-center gap-4 hover:bg-gray-600  px-4 py-2 cursor-pointer w-fit rounded-full mt-3 "
           key={index}>
             <span className=" text-2xl">{item.icon}</span> 
             <span className=" text-lg">{item.tittle}</span></li> )
         }
          </ul>
          <div className="mt-5 px-8">
          <button className=" bg-[#1d9bf0] py-2 rounded-full w-full">Tweet</button>
          </div>
        </div>
      </div>

      <div className=" col-span-6 border-r-[1px] border-l-[1px] border-gray-300 ">
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        
      </div>


      <div className=" col-span-3 "></div>

      
    </div>
  );
}
