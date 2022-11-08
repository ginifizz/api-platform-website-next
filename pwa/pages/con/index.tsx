import Landing from "con/components/landing";
import Layout from "con/components/layout";
import navData from "con/data/nav";

const Con = () => (
  <Layout nav={navData} logoAlwaysVisible>
    <Landing/>
  </Layout>
);

export default Con;
