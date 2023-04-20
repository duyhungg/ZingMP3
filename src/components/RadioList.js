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
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
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
