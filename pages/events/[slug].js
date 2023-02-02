import { useRouter } from "next/router";
import Layout from "../../components/Layout";

const SingleEvent = () => {
  const router = useRouter();
  console.log(router);
  return (
    <Layout>
      SingleEvent - {router.query.slug}
      <button
        onClick={() => {
          router.push("/");
        }}
      >
        QWerty
      </button>
    </Layout>
  );
};

export default SingleEvent;
