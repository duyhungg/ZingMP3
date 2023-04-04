import {
  Slider,
  Section,
  NewRelease,
  Rank,
  ChartSection,
} from "../../components";
import { useSelector } from "react-redux";

const Home = () => {
  const { focus, chill, artis, top100, newMusic, weekChart, radio } =
    useSelector((state) => state.app);
  //console.log(radio);
  return (
    <div className="overflow-y-auto w-full">
      <Slider />
      <NewRelease />
      <Section data={focus} />
      <Section data={chill} />
      <Section data={artis} />
      <Section data={top100} />
      <Section data={newMusic} />
      <Rank data={weekChart} />
      <ChartSection />
      <div className="w-full h-[100px]"></div>
    </div>
  );
};

export default Home;
