import Radio from "./Radio";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function RadioList({ data }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
  };
  console.log(data);
  return (
    <div className=" object-contain mt-10 w-full px-[59px] gap-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-[20px] font-bold">{data?.title}</h3>
        <span className="text-xs hover:cursor-pointer">TẤT CẢ</span>
      </div>
      <Slider {...settings}>
        {data?.items.map((item, index) => (
          <Radio
            key={item?.id}
            thumbnail={item?.program?.thumbnail}
            thumbnailH={item?.thumbnailH}
            title={item?.host?.name}
            activeUsers={item?.activeUsers}
          />
        ))}
      </Slider>
    </div>
  );
}

export default RadioList;
