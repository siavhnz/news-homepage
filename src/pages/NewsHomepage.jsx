import MainNews from "../components/news/MainNews";
import Layout from "../components/layout/Layout";
import LatestNews from "../components/news/latest-news/List";

const NewsHomepage = () => {
  return (
    <Layout>
      <div className="max-w-screen-sxl px-4 pt-7 lg:ml-auto lg:mr-auto lg:pt-16 lg:px-5 lg:flex lg:gap-x-7">
        <MainNews />
        <LatestNews />
      </div>
    </Layout>
  );
};

export default NewsHomepage;
