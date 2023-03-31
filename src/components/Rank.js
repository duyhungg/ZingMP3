import { Link } from "react-router-dom";
function Rank({ data }) {
  return (
    <div className="flex items-center px-[43px] w-full mt-12">
      {data?.map((item) => (
        <Link
          to={item?.link?.split(".")[0]}
          key={item.link}
          className="flex-1 px-4">
          <img
            src={item?.cover}
            alt="cover"
            className="w-full object-cover rounded-md"
          />
        </Link>
      ))}
    </div>
  );
}

export default Rank;
<></>;
