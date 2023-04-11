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
  return (
    <div className=" object-contain mt-10 w-full">
      <Slider {...settings}>
        {data?.items.map((item, index) => (
          <Radio
            key={item.id}
            thumbnail={item.program.thumbnail}
            thumbnailH={item.thumbnailH}
            title={item.title}
            activeUsers={item.activeUsers}
          />
        ))}
      </Slider>
    </div>
  );
}

export default RadioList;
