import danal from "../assets/danal.png";
import believe from "../assets/believe.png";
import beggers from "../assets/beggers.png";
import FUGA from "../assets/FUGA.png";
import genie from "../assets/genie.png";
import hikoon from "../assets/hikoon.png";
import ingrooves from "../assets/ingrooves.png";
import kakao from "../assets/kakao.png";
import monstercat from "../assets/monstercat.png";
import routenote from "../assets/route-note.png";
import sm from "../assets/SM-Entertainment.png";
import sony from "../assets/sony.png";
import stone from "../assets/stone-music.png";
import taihe from "../assets/taihe.png";
import universal from "../assets/universal-1.png";
import yg from "../assets/yg.png";

function Sponsor() {
  const arr1 = [danal, believe, beggers, FUGA, genie, hikoon, ingrooves, kakao];
  const arr2 = [monstercat, routenote, sm, sony, stone, taihe, universal, yg];
  return (
    <div className=" mt-5 gap-4 w-full">
      <div className="flex items-center justify-center m-4">
        <h1 className="text-sm font-bold ">Đối tác âm nhạc</h1>
      </div>
      <div className="flex gap-4 items-center justify-center m-4">
        {arr1.map((item, index) => (
          <div
            key={index}
            className=" bg-white rounded-md flex items-center justify-center object-contain w-auto h-auto">
            <img
              src={item}
              alt={item}
              className="object-contain w-[123px] h-[68.09px]"
            />
          </div>
        ))}
      </div>
      <div className="flex gap-4 items-center justify-center m-4">
        {arr2.map((item, index) => (
          <div
            key={index}
            className=" bg-white rounded-md flex items-center justify-center object-contain w-auto h-auto">
            <img
              src={item}
              alt={item}
              className="object-contain w-[122px] h-[68.09px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sponsor;
