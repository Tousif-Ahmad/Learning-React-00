import React from "react";
import {
  RiFacebookCircleFill,
  RiTwitterFill,
  RiInstagramLine,
  RiYoutubeFill,
} from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";
import Buttons from "./Buttons";
import Footer from "./Footer";

const Card = ( {name, profession, imgUrl} ) => {
  return (
    <div className="w-[300px] rounded-[10px] overflow-hidden shadow-2xl bg-white pb-2.5">
      <div className="w-full h-[120px] bg-[#4071F4] flex justify-center relative">
        <img
          className="h-[100px] rounded-full absolute top-10"
          src={imgUrl}
          alt=""
        />
      </div>
      <div className="text-center mt-7">
        <h2 className="text-[1.3rem] font-bold">{name}</h2>
        <p className="text-[1rem] font-normal">{profession}</p>
      </div>

      <div className="flex justify-center gap-4 text-2xl mt-2">
        <RiFacebookCircleFill className="text-blue-600" />
        <RiTwitterFill className="text-[teal]" />
        <RiInstagramLine className="text-red-400" />
        <RiYoutubeFill className="text-[red]" />
      </div>

      <div className="flex justify-center gap-2.5 mt-2">
        <Buttons text="Subscribe" />
        <Buttons text="Message" />
      </div>

      <div className="flex justify-center gap-5 mt-2.5">
        <Footer icon={<CiHeart/>} content="14.3K"/>
        <Footer icon={<FaRegComment/>} content="65.3K"/>
        <Footer icon={<RiShareForwardLine/>} content="45.3K"/>
      </div>

    </div>
  );
};

export default Card;
