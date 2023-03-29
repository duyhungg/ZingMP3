import React, { memo } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function Section() {
  const { albumHot } = useSelector((state) => state.app);
  const navigate = useNavigate();
  console.log(albumHot);
  return (
    <div className="mt-12 px-[59px] flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <h3 className="text-[20px] font-bold">{albumHot?.title}</h3>
        <span className="text-xs">TẤT CẢ</span>
      </div>
      <div className="flex items-center justify-between gap-[28px]">
        {albumHot &&
          albumHot?.items?.length > 0 &&
          albumHot.items.map((item, index) => (
            <div
              key={item.encodeId}
              onClick={() => {
                navigate(item?.link?.split(".")[0]);
              }}
              className={`flex flex-col gap-3 flex-auto w-1/5 text-sm cursor-pointer ${
                index <= 4 ? "block" : "hidden"
              }`}>
              <img
                src={item.thumbnailM}
                alt="avatar"
                className="w-full h-auto rounded-lg"
              />
              <span className="flex flex-col">
                <span className="font-semibold">{item.title}</span>
                <span>{`${item.sortDescription?.slice(0, 10)}...`}</span>
              </span>
            </div>
          ))}
      </div>
    </div>
  );
}

export default memo(Section);
