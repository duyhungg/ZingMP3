import { Slider, Section, NewRelease, Rank } from "../../components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Home = () => {
  const { focus, chill, artis, top100, newMusic, weekChart } = useSelector(
    (state) => state.app
  );
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
      <div className="w-full h-[500px]"></div>
    </div>
  );
};

export default Home;
