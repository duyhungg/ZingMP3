import avatar from "../../assets/avatar.jpg";
import { SongItem } from "../../components";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
const Personal = () => {
  const { newRelease } = useSelector((state) => state.app);
  const [isActived, setIsActived] = useState(0);
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    if (isActived === 0) {
      setSongs(newRelease?.items?.all);
    } else if (isActived === 1) {
      setSongs(newRelease?.items?.vPop);
    } else {
      setSongs(newRelease?.items?.others);
    }
  }, [isActived, newRelease]);
  //console.log(newRelease);
  return (
    <div className="">
      <h3 className="flex items-center justify-center mt-5 font-bold text-xl">
        Đỗ Ngọc Duy Hưng
      </h3>
      <div className="flex items-center justify-center mt-5">
        <img src={avatar} alt="" className="rounded-full w-[150px] h-[150px]" />
      </div>
      <div className="flex items-center justify-center gap-5 text-xs mt-5">
        <button
          type="button"
          onClick={() => setIsActived(0)}
          className={`py-1 px-4 rounded-l-full rounded-r-full border border-gray-400 bg-transparent ${
            isActived === 0 && "bg-main-500 text-white"
          }`}>
          All
        </button>
        <button
          type="button"
          onClick={() => setIsActived(1)}
          className={`py-1 px-4 rounded-l-full rounded-r-full border border-gray-400 bg-transparent ${
            isActived === 1 && "bg-main-500 text-white"
          }`}>
          VIỆT NAM
        </button>
        <button
          type="button"
          onClick={() => setIsActived(2)}
          className={`py-1 px-4 rounded-l-full rounded-r-full border border-gray-400 bg-transparent ${
            isActived === 2 && "bg-main-500 text-white"
          }`}>
          QUỐC TẾ
        </button>
      </div>
      <div>
        <div className="flex flex-wrap w-full justify-between flex-col px-[59px]">
          {songs
            ?.filter((item, index) => index)
            ?.map((item) => (
              <div key={item.encodeId} className="flex flex-col">
                <SongItem
                  thumbnail={item.thumbnail}
                  title={item.title}
                  artists={item.artistsNames}
                  releaseDate={item.releaseDate}
                  sid={item.encodeId}
                  sm={false}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Personal;
