import { Layout } from "antd";
import { Header } from "../stories/Header";

import "antd/dist/antd.css";
import "../styles/globals.css";

const { Content } = Layout;
const links = [
  {
    link: "/",
    label: "Intro",
  },
  {
    link: "/profile",
    label: "Profile",
  },
  {
    link: "/work",
    label: "Work",
  },
];
const current = "/";

function MyApp({ Component, pageProps }) {
  return <Layout>
  <Header links={links} current={current}></Header>
  <Layout  style={{backgroundColor: 'white'}}>
    <Content>
      <Component {...pageProps} />
    </Content>
  </Layout>
</Layout>;
  
}

export default MyApp;
