import { memo } from "react";
import { useEffect, useState } from "react";
import List from "./List";
function RankList({ data }) {
  const [isShowFull, setIsShowFull] = useState(false);
  const [songs, setSongs] = useState();
  useEffect(() => {
    if (!isShowFull) {
      setSongs(data?.filter((item, index) => index < 10));
    } else {
      setSongs(data);
    }
  }, [isShowFull, data]);
  return (
    <div className="w-full">
      {songs?.map((item, index) => (
        <List key={item.encodeId} songData={item} order={index + 1} />
      ))}
      <div className="flex w-full items-center justify-center">
        <button
          type="button"
          onClick={() => setIsShowFull(!isShowFull)}
          className="px-4 py-2 border border-[0E8080] rounded-l-full rounded-r-full text-sm text-main-500 hover:bg-main-500 hover:text-white">
          {isShowFull ? "ẩn bớt" : "xem tất cả"}
        </button>
      </div>
    </div>
  );
}

export default memo(RankList);
