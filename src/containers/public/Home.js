import {
  Slider,
  Section,
  NewRelease,
  Rank,
  ChartSection,
} from "../../components";
import { useSelector } from "react-redux";
import Loading from "../../components/Loading";
const Home = () => {
  const { focus, chill, artis, top100, newMusic, weekChart, radio } =
    useSelector((state) => state.app);
  //console.log(radio);

  return (
    <>
      {focus && chill && artis && top100 && newMusic && weekChart && radio ? (
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
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <Loading />
        </div>
      )}
    </>
  );
};

export default Home;
