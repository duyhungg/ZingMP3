function Radio({ thumbnail, thumbnailH, title, activeUsers }) {
  return (
    <div className="w-full flex">
      <div>
        <div className=" flex flex-col relative border border-red-500 rounded-full">
          <img
            src={thumbnail}
            alt="avatar"
            className="object-contain h-[auto] w-[150px] rounded-full relative hover:cursor-pointer hover:animate-scale-up-image"></img>
          <img
            src={thumbnailH}
            alt="avatar"
            className="absolute bg-black w-[50px] h-[50px] bottom-0 left-[120px] rounded-full"></img>
        </div>
        <div className="flex flex-col">
          <span className="flex items-center justify-center mt-5">{title}</span>
          <span className="flex items-center justify-center">{`${activeUsers} đang nghe`}</span>
        </div>
      </div>
    </div>
  );
}

export default Radio;
