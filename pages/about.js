import Link from "next/link";
import Layout from "../components/Layout";

const about = () => {
  return (
    <Layout title={"About Page"}>
      <h1>About</h1>
      <p>This is an app to find the latest DJ and other musical Events</p>
      <p>Version: 1.0.0</p>
      <Link href="/">Go home</Link>
    </Layout>
  );
};

export default about;
