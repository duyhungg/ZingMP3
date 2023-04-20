import React, { memo, useState } from "react";
import icons from "../ultis/icons";
import moment from "moment";
import { useDispatch } from "react-redux";
import * as actions from "../store/actions";

const { BsMusicNoteBeamed } = icons;

const List = ({
  songData,
  order,
  node,
  isHideAlbum,
  numberSlide,
  numberArtist,
}) => {
  const dispatch = useDispatch();
  // console.log(songData);
  return (
    <div
      className="flex justify-between items-center p-[10px] border-t border-[rgba(0,0,0,0.05)] hover:bg-[#DDE4E4] cursor-pointer"
      onClick={() => {
        dispatch(actions.setCurSongId(songData?.encodeId));
        dispatch(actions.play(true));
        dispatch(actions.playAlbum(true));
        dispatch(
          actions.setRecent({
            thumbnail: songData?.thumbnail,
            title: songData?.title,
            sid: songData?.encodeId,
            artists: songData?.artistsNames,
          })
        );
      }}>
      <div className="flex items-center gap-3 flex-1">
        {order && (
          <span
            className={`${
              order === 1
                ? "text-shadow-no1"
                : order === 2
                ? "text-shadow-no2"
                : order === 3
                ? "text-shadow-no3"
                : "text-shadow-rest"
            } text-main-300 items-center justify-center text-[32px] m-auto flex-none w-[10%]`}>
            {order}
          </span>
        )}

        {node ? (
          <span>
            <BsMusicNoteBeamed />
          </span>
        ) : (
          ""
        )}
        <img
          src={songData?.thumbnail}
          alt="thumbnailM"
          className="w-10 h-10 object-cover rounded-md"
        />
        <div className="flex flex-col w-full ">
          <span className="text-sm font-semibold ">
            {songData?.title?.length > numberSlide
              ? `${songData?.title?.slice(0, numberSlide)}...`
              : songData?.title}
          </span>
          <span>
            {songData?.artistsNames.length > numberArtist
              ? `${songData?.artistsNames.slice(0, numberArtist)}... `
              : songData?.artistsNames}
          </span>
        </div>
      </div>
      {isHideAlbum ? (
        <div className="flex-1 flex items-center justify-center text-sm">
          {songData?.album?.title?.length > numberSlide
            ? `${songData?.album?.title?.slice(0, numberSlide)}...`
            : songData?.album?.title}
        </div>
      ) : (
        ""
      )}
      <div className="flex-1 flex justify-end">
        {moment.utc(songData?.duration * 1000).format("mm:ss")}
      </div>
    </div>
  );
};

export default memo(List);
