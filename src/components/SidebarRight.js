import { useState, useEffect } from "react";
import icons from "../ultis/icons";
import { useSelector } from "react-redux";
import SongItem from "./SongItem";
import { apiGetDetaiPlaylist } from "../apis";
import { Scrollbars } from "react-custom-scrollbars-2";
function RightSidebar() {
  const { ImBin2 } = icons;
  const [isListenRecent, setIsListenRecent] = useState(false);
  const { curSongData, curAlbumPid, isPlaying, recentSongs, curSongId } =
    useSelector((state) => state.music);
  const [playlist, setPlaylist] = useState();
  const fetchDetailPlaylist = async () => {
    const response = await apiGetDetaiPlaylist(curAlbumPid);
    if (response.data?.err === 0)
      setPlaylist(response?.data?.data?.song?.items);
  };
  useEffect(() => {
    curAlbumPid && fetchDetailPlaylist();
  }, []);
  useEffect(() => {
    if (curAlbumPid && isPlaying) fetchDetailPlaylist();
  }, [curAlbumPid, isPlaying]);
  useEffect(() => {
    if (isPlaying) setIsListenRecent(false);
  }, [isPlaying, curSongId]);
  return (
    <div className="flex flex-col text-xs w-full h-full">
      <div className="h-[70px] flex-none py-[14px] px-2 flex items-center justify-between">
        <div className=" flex flex-auto gap-8 justify-center bg-main-200 rounded-l-full rounded-r-full py-[6px] px-[1px]">
          <span
            onClick={() => setIsListenRecent(!isListenRecent)}
            className={`py-[5px] ${
              !isListenRecent && "bg-main-500"
            } flex-1 flex justify-center items-center rounded-l-full rounded-r-full cursor-pointer`}>
            Danh sách phát
          </span>
          <span
            onClick={() => setIsListenRecent(!isListenRecent)}
            className={`py-[5px] ${
              isListenRecent && "bg-main-500"
            } flex-1 flex justify-center items-center rounded-l-full rounded-r-full cursor-pointer`}>
            Nghe gần đây
          </span>
        </div>
        <span className="rounded-full hover:cursor-pointer p-2">
          <ImBin2 size={16} />
        </span>
      </div>
      {isListenRecent ? (
        <div className="flex flex-col flex-auto">
          <Scrollbars autoHide style={{ width: "100%", height: "100%" }}>
            {recentSongs && (
              <div className="flex flex-col flex-auto">
                {recentSongs?.map((item) => (
                  <SongItem
                    key={item.sid}
                    thumbnail={item?.thumbnail}
                    title={item?.title}
                    artists={item?.artists}
                    sid={item?.sid}
                    sm={true}
                  />
                ))}
              </div>
            )}
          </Scrollbars>
        </div>
      ) : (
        <div className="w-full flex flex-col px-2 flex-auto">
          <SongItem
            thumbnail={curSongData?.thumbnail}
            title={curSongData?.title}
            artists={curSongData?.artistsNames}
            sid={curSongData?.encodeId}
            sm={true}
            style="bg-main-500 text-white"
          />
          <div className="flex flex-col text-black pt-[15px] px-2 pb-[5px]">
            <span className=" text-sm font-bold">Tiếp Theo</span>
            <div className="opacity-70 ">
              <span>Từ PlayList </span>
              <span className="font-semibold text-main-500">
                {curSongData?.album?.title.length > 30
                  ? `${curSongData?.album?.title.slice(0, 30)}...`
                  : curSongData?.album?.title}
              </span>
            </div>
            {playlist && (
              <div className="flex flex-col flex-auto">
                <Scrollbars autoHide style={{ width: "100%", height: "500px" }}>
                  {playlist?.map((item) => (
                    <SongItem
                      key={item.encodeId}
                      thumbnail={item?.thumbnail}
                      title={item?.title}
                      artists={item?.artistsNames}
                      sid={item?.encodeId}
                      sm={true}
                    />
                  ))}
                </Scrollbars>
              </div>
            )}
          </div>
        </div>
      )}
      <div className="w-full h-[90px]"></div>
    </div>
  );
}

export default RightSidebar;
