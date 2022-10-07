import Layout from "@/components/layout";
import EndFootBar from "../components/FootBar";
import TopHeadBar from "../components/HeadBar";
import Mine from "../components/Minecraft";

const Minecraft = () => {
  return (
    <Layout>
      <TopHeadBar />
      <Mine />
      <EndFootBar />
    </Layout>
  );
};

export default Minecraft;
