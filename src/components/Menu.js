function Menu({ arr, arr1 }) {
  return (
    <div className=" bg-main-400 mt-[-5px] rounded-l-[20px] rounded-r-[20px] ">
      {arr1.map((item) => (
        <div
          key={item.id}
          className="flex px-2 pt-2 pb-2 items-center justify-between hover:bg-overlay-20 hover:rounded-r-[20px] hover:rounded-l-[20px] hover:cursor-pointer">
          <div className="flex items-center gap-2 pr-5">
            <span>{item.icon1}</span>
            <div className="font-semibold">{item.text}</div>
          </div>
          <div>{item.icon2}</div>
        </div>
      ))}
      <div className="border border-main-500 ml-[25px] mr-[25px] mt-2 mb-2"></div>
      {arr.map((item) => (
        <div
          key={item.id}
          className="flex px-2 pt-2 pb-2 items-center justify-between hover:bg-overlay-20 hover:rounded-r-[20px] hover:rounded-l-[20px] hover:cursor-pointer">
          <div className="flex items-center gap-2 pr-5">
            <span>{item.icon1}</span>
            <div className="font-semibold">{item.text}</div>
          </div>
          <div>{item.icon2}</div>
        </div>
      ))}
    </div>
  );
}

export default Menu;
