import avatar from "../assets/avatar.jpg";
import { useState, useRef } from "react";
function Radio({ thumbnail, thumbnailH, title, activeUsers }) {
  const [isHover, setIsHover] = useState(false);
  const imageRef = useRef();
  const handleHover = () => {
    setIsHover(true);
    imageRef.current.classList?.remove("animate-scale-down-image");
    imageRef.current.classList?.add("animate-scale-up-image");
  };
  const handleLeave = () => {
    setIsHover(false);
    imageRef.current.classList?.remove("animate-scale-up-image");
    imageRef.current.classList?.add("animate-scale-down-image");
  };
  return (
    <div className="w-full mx-[59px] flex">
      <div>
        <div
          className=" flex flex-col relative"
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}>
          <img
            src={thumbnail}
            alt="avatar"
            className="object-contain h-[150px] w-[150px] rounded-full relative hover:cursor-pointer hover:animate-scale-up-image"></img>
          <img
            src={thumbnailH}
            alt="avatar"
            className="absolute bg-black w-[50px] h-[50px] bottom-0 left-[120px] rounded-full"></img>
        </div>
        <div className="flex flex-col">
          <span className="flex items-center justify-center mt-5">
            {`${title?.length > 30 ? `${title.slice(0, 20)}...` : title}`}
          </span>
          <span className="flex items-center justify-center">{`${activeUsers} đang nghe`}</span>
        </div>
      </div>
    </div>
  );
}

export default Radio;
