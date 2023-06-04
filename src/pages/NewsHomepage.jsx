import MainNews from "../components/news/MainNews";
import Layout from "../components/layout/Layout";
import LatestNews from "../components/news/latest-news/List";
import NumberedNews from "../components/news/numbered-news/List";

const NewsHomepage = () => {
  return (
    <Layout>
      <div className="max-w-screen-sxl px-4 pt-7 lg:ml-auto lg:mr-auto lg:flex lg:gap-x-7 lg:px-5 lg:pt-16">
        <MainNews />
        <LatestNews />
      </div>
      <div className="mb-18 mt-15 flex max-w-screen-sxl flex-col gap-y-9 px-4 lg:ml-auto lg:mr-auto lg:mt-18 lg:flex-row lg:gap-x-7 lg:px-5">
        <NumberedNews />
      </div>
    </Layout>
  );
};

export default NewsHomepage;
