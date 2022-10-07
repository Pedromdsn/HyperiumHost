import Layout from "@/components/layout";
import EndFootBar from "../components/FootBar";
import TopHeadBar from "../components/HeadBar";
import Discord from "../components/Home/Discord";
import Sobre from "../components/Home/Main";
import Why from "../components/Home/Why";

const Home = () => {
  return (
    <Layout>
      <TopHeadBar />
      <Sobre />
      <Why />
      <Discord />
      <EndFootBar />
    </Layout>
  );
};

export default Home;
